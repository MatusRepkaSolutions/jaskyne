document.addEventListener("DOMContentLoaded", () => {
    initCaveTabs();
    initCaveGallery();
});

function initCaveTabs() {
    const tabButtons = document.querySelectorAll(".cave-tab-btn");
    const tabPanels = document.querySelectorAll(".cave-tab-panel");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (typeof window.playClickSound === "function") {
                window.playClickSound();
            }

            const target = button.dataset.tabTarget;

            tabButtons.forEach((btn) => {
                btn.classList.remove("active", "button-anim-global-active");
            });

            tabPanels.forEach((panel) => {
                panel.classList.remove("active");
            });

            button.classList.add("active");

            void button.offsetWidth;
            button.classList.add("button-anim-global-active");

            const targetPanel = document.getElementById(`tab-${target}`);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }

            if (target === "gallery") {
                const galleryPanel = document.getElementById("tab-gallery");
                if (galleryPanel) {
                    galleryPanel.classList.add("gallery-ready");
                }
            }
        });
    });
}

function initCaveGallery() {
    const root = document.getElementById("tab-gallery");
    if (!root) return;

    const basePath = root.dataset.galleryPath;
    const count = parseInt(root.dataset.galleryCount || "0", 10);

    if (!basePath || !count) return;

    const stage = root.querySelector(".gallery-stage");
    const mainImg = root.querySelector(".gallery-main-img");

    const leftSide = root.querySelector(".gallery-side-left");
    const rightSide = root.querySelector(".gallery-side-right");
    const leftImg = root.querySelector(".gallery-side-left img");
    const rightImg = root.querySelector(".gallery-side-right img");

    const captions = root.querySelectorAll(".gallery-caption-item");

    if (!stage || !mainImg || !leftSide || !rightSide || !leftImg || !rightImg) return;

    let index = 0;
    let startX = 0;
    let deltaX = 0;
    let isDragging = false;
    let hasDragged = false;
    let pointerId = null;
    let autoCompleted = false;

    const sideX = 1160;
    const swipeThreshold = 180;
    const maxDrag = sideX;

    const sideScaleEnd = 2.08;
    const centerScaleEnd = 0.48;

    function wrap(i) {
        if (i < 0) return count - 1;
        if (i >= count) return 0;
        return i;
    }

    function imgSrc(i) {
        return `${basePath}/${i + 1}.jpg`;
    }

    function setImages() {
        const prev = wrap(index - 1);
        const next = wrap(index + 1);

        mainImg.src = imgSrc(index);
        leftImg.src = imgSrc(prev);
        rightImg.src = imgSrc(next);

        captions.forEach((c) => c.classList.remove("active"));

        const active = root.querySelector(`.gallery-caption-item[data-index="${index}"]`);
        if (active) active.classList.add("active");
    }

    function setVars(values) {
        Object.entries(values).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    }

    function resetTransforms() {
        setVars({
            "--gallery-center-x": "0px",
            "--gallery-left-x": `-${sideX}px`,
            "--gallery-right-x": `${sideX}px`,

            "--gallery-center-scale": "1",
            "--gallery-left-scale": "1",
            "--gallery-right-scale": "1",

            "--gallery-center-opacity": "1",
            "--gallery-left-opacity": "0.28",
            "--gallery-right-opacity": "0.28"
        });

        root.classList.remove("is-dragging", "is-snapping");
    }

    function applyDrag(x) {
        const limited = Math.max(-maxDrag, Math.min(maxDrag, x));
        const progress = Math.min(Math.abs(limited) / maxDrag, 1);

        const centerScale = 1 - ((1 - centerScaleEnd) * progress);
        const sideScale = 1 + ((sideScaleEnd - 1) * progress);

        const centerOpacity = 1 - (0.45 * progress);
        const activeSideOpacity = 0.28 + (0.72 * progress);
        const passiveSideOpacity = 0.28 - (0.16 * progress);

        if (limited < 0) {
            setVars({
                "--gallery-center-x": `${-sideX * progress}px`,
                "--gallery-right-x": `${sideX * (1 - progress)}px`,
                "--gallery-left-x": `${-sideX - (sideX * 0.35 * progress)}px`,

                "--gallery-center-scale": centerScale.toString(),
                "--gallery-right-scale": sideScale.toString(),
                "--gallery-left-scale": "1",

                "--gallery-center-opacity": centerOpacity.toString(),
                "--gallery-right-opacity": activeSideOpacity.toString(),
                "--gallery-left-opacity": passiveSideOpacity.toString()
            });

            if (progress >= 1 && !autoCompleted) {
                autoComplete("next");
            }
        } else if (limited > 0) {
            setVars({
                "--gallery-center-x": `${sideX * progress}px`,
                "--gallery-left-x": `${-sideX * (1 - progress)}px`,
                "--gallery-right-x": `${sideX + (sideX * 0.35 * progress)}px`,

                "--gallery-center-scale": centerScale.toString(),
                "--gallery-left-scale": sideScale.toString(),
                "--gallery-right-scale": "1",

                "--gallery-center-opacity": centerOpacity.toString(),
                "--gallery-left-opacity": activeSideOpacity.toString(),
                "--gallery-right-opacity": passiveSideOpacity.toString()
            });

            if (progress >= 1 && !autoCompleted) {
                autoComplete("prev");
            }
        }
    }

    function autoComplete(direction) {
        autoCompleted = true;
        isDragging = false;

        if (typeof window.playClickSound === "function") {
            window.playClickSound();
        }

        if (direction === "next") {
            index = wrap(index + 1);
        } else {
            index = wrap(index - 1);
        }

        root.classList.add("is-snapping");

        window.setTimeout(() => {
            setImages();
            resetTransforms();
        }, 120);
    }

    function snapBack() {
        root.classList.add("is-snapping");
        resetTransforms();
    }

    function goNext() {
        if (typeof window.playClickSound === "function") {
            window.playClickSound();
        }

        root.classList.add("is-snapping");

        setVars({
            "--gallery-center-x": `-${sideX}px`,
            "--gallery-right-x": "0px",
            "--gallery-left-x": `${-sideX * 1.35}px`,

            "--gallery-center-scale": centerScaleEnd.toString(),
            "--gallery-right-scale": sideScaleEnd.toString(),
            "--gallery-left-scale": "1",

            "--gallery-center-opacity": "0.55",
            "--gallery-right-opacity": "1",
            "--gallery-left-opacity": "0.12"
        });

        window.setTimeout(() => {
            index = wrap(index + 1);
            setImages();
            resetTransforms();
        }, 220);
    }

    function goPrev() {
        if (typeof window.playClickSound === "function") {
            window.playClickSound();
        }

        root.classList.add("is-snapping");

        setVars({
            "--gallery-center-x": `${sideX}px`,
            "--gallery-left-x": "0px",
            "--gallery-right-x": `${sideX * 1.35}px`,

            "--gallery-center-scale": centerScaleEnd.toString(),
            "--gallery-left-scale": sideScaleEnd.toString(),
            "--gallery-right-scale": "1",

            "--gallery-center-opacity": "0.55",
            "--gallery-left-opacity": "1",
            "--gallery-right-opacity": "0.12"
        });

        window.setTimeout(() => {
            index = wrap(index - 1);
            setImages();
            resetTransforms();
        }, 220);
    }

    function onPointerDown(e) {
        if (e.button !== undefined && e.button !== 0) return;

        isDragging = true;
        hasDragged = false;
        autoCompleted = false;
        pointerId = e.pointerId;

        startX = e.clientX;
        deltaX = 0;

        root.classList.remove("is-snapping");
        root.classList.add("is-dragging");

        stage.setPointerCapture(pointerId);
    }

    function onPointerMove(e) {
        if (!isDragging || autoCompleted) return;

        deltaX = e.clientX - startX;

        if (Math.abs(deltaX) > 8) {
            hasDragged = true;
        }

        applyDrag(deltaX);
    }

    function onPointerUp() {
        if (!isDragging || autoCompleted) return;

        isDragging = false;

        if (pointerId !== null) {
            try {
                stage.releasePointerCapture(pointerId);
            } catch (_) {}
        }

        pointerId = null;

        if (deltaX <= -swipeThreshold) {
            goNext();
        } else if (deltaX >= swipeThreshold) {
            goPrev();
        } else {
            snapBack();
        }

        window.setTimeout(() => {
            hasDragged = false;
        }, 80);
    }

    leftSide.addEventListener("click", (e) => {
        if (hasDragged) {
            e.preventDefault();
            return;
        }

        goPrev();
    });

    rightSide.addEventListener("click", (e) => {
        if (hasDragged) {
            e.preventDefault();
            return;
        }

        goNext();
    });

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", onPointerUp);
    stage.addEventListener("pointercancel", onPointerUp);

    setImages();
    resetTransforms();
}