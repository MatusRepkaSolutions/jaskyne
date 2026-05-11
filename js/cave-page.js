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
    const center = root.querySelector(".gallery-center");
    const mainImg = root.querySelector(".gallery-main-img");

    const leftSide = root.querySelector(".gallery-side-left");
    const rightSide = root.querySelector(".gallery-side-right");
    const leftImg = root.querySelector(".gallery-side-left img");
    const rightImg = root.querySelector(".gallery-side-right img");

    const captions = root.querySelectorAll(".gallery-caption-item");

    if (!stage || !center || !mainImg || !leftSide || !rightSide || !leftImg || !rightImg) return;

    center.classList.add("gallery-slide");
    leftSide.classList.add("gallery-slide");
    rightSide.classList.add("gallery-slide");

    const farLeft = document.createElement("div");
    farLeft.className = "gallery-slide gallery-side gallery-side-far-left";
    farLeft.innerHTML = `<img class="gallery-side-img" src="">`;

    const farRight = document.createElement("div");
    farRight.className = "gallery-slide gallery-side gallery-side-far-right";
    farRight.innerHTML = `<img class="gallery-side-img" src="">`;

    stage.insertBefore(farLeft, leftSide);
    stage.appendChild(farRight);

    const farLeftImg = farLeft.querySelector("img");
    const farRightImg = farRight.querySelector("img");

    let index = 0;
    const imageSources = [];

    for (let i = 0; i < count; i++) {
        const src = `${basePath}/${i + 1}.jpg`;
        imageSources.push(src);

        const preload = new Image();
        preload.src = src;
    }
    let startX = 0;
    let deltaX = 0;
    let isDragging = false;
    let hasDragged = false;
    let pointerId = null;
    let completed = false;

    const sideX = 1160;
    const maxDrag = sideX;
    const swipeThreshold = 180;

    const centerScaleEnd = 0.48;
    const sideScaleEnd = 2.08;

    function wrap(i) {
        while (i < 0) i += count;
        while (i >= count) i -= count;
        return i;
    }

    function imgSrc(i) {
        return imageSources[wrap(i)];
    }

    function setImages() {
        farLeftImg.src = imgSrc(index - 2);
        leftImg.src = imgSrc(index - 1);
        mainImg.src = imgSrc(index);
        rightImg.src = imgSrc(index + 1);
        farRightImg.src = imgSrc(index + 2);

        captions.forEach((c) => c.classList.remove("active"));

        const active = root.querySelector(`.gallery-caption-item[data-index="${index}"]`);
        if (active) active.classList.add("active");
    }

    function setVars(values) {
        Object.entries(values).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    }

    function setDefaultPosition() {
        setVars({
            "--gallery-far-left-x": `${-sideX * 2}px`,
            "--gallery-left-x": `${-sideX}px`,
            "--gallery-center-x": "0px",
            "--gallery-right-x": `${sideX}px`,
            "--gallery-far-right-x": `${sideX * 2}px`,

            "--gallery-far-left-scale": "1",
            "--gallery-left-scale": "1",
            "--gallery-center-scale": "1",
            "--gallery-right-scale": "1",
            "--gallery-far-right-scale": "1",

            "--gallery-far-left-opacity": "0",
            "--gallery-left-opacity": "0.28",
            "--gallery-center-opacity": "1",
            "--gallery-right-opacity": "0.28",
            "--gallery-far-right-opacity": "0"
        });
    }

    function resetHard() {
        root.classList.add("is-dragging");
        root.classList.remove("is-snapping", "drag-next", "drag-prev");

        setDefaultPosition();

        requestAnimationFrame(() => {
            root.classList.remove("is-dragging");
        });
    }

    function applyDrag(x) {
        const limited = Math.max(-maxDrag, Math.min(maxDrag, x));
        const progress = Math.min(Math.abs(limited) / maxDrag, 1);

        const centerScale = 1 - ((1 - centerScaleEnd) * progress);
        const sideScale = 1 + ((sideScaleEnd - 1) * progress);

        const centerOpacity = 1 - (0.45 * progress);
        const activeSideOpacity = 0.28 + (0.72 * progress);
        const normalSideOpacity = 0.28;
        const hiddenOpacity = 0.28 * progress;

        if (limited < 0) {
            root.classList.add("drag-next");
            root.classList.remove("drag-prev");

            setVars({
                "--gallery-far-left-x": `${-sideX * 2}px`,
                "--gallery-left-x": `${-sideX - (sideX * progress)}px`,
                "--gallery-center-x": `${-sideX * progress}px`,
                "--gallery-right-x": `${sideX * (1 - progress)}px`,
                "--gallery-far-right-x": `${sideX * (2 - progress)}px`,

                "--gallery-far-left-scale": "1",
                "--gallery-left-scale": "1",
                "--gallery-center-scale": centerScale.toString(),
                "--gallery-right-scale": sideScale.toString(),
                "--gallery-far-right-scale": "1",

                "--gallery-far-left-opacity": "0",
                "--gallery-left-opacity": `${normalSideOpacity * (1 - progress)}`,
                "--gallery-center-opacity": centerOpacity.toString(),
                "--gallery-right-opacity": activeSideOpacity.toString(),
                "--gallery-far-right-opacity": hiddenOpacity.toString()
            });

            if (progress >= 1 && !completed) {
                completeMove("next");
            }
        }

        if (limited > 0) {
            root.classList.add("drag-prev");
            root.classList.remove("drag-next");

            setVars({
                "--gallery-far-left-x": `${-sideX * (2 - progress)}px`,
                "--gallery-left-x": `${-sideX * (1 - progress)}px`,
                "--gallery-center-x": `${sideX * progress}px`,
                "--gallery-right-x": `${sideX + (sideX * progress)}px`,
                "--gallery-far-right-x": `${sideX * 2}px`,

                "--gallery-far-left-scale": "1",
                "--gallery-left-scale": sideScale.toString(),
                "--gallery-center-scale": centerScale.toString(),
                "--gallery-right-scale": "1",
                "--gallery-far-right-scale": "1",

                "--gallery-far-left-opacity": hiddenOpacity.toString(),
                "--gallery-left-opacity": activeSideOpacity.toString(),
                "--gallery-center-opacity": centerOpacity.toString(),
                "--gallery-right-opacity": `${normalSideOpacity * (1 - progress)}`,
                "--gallery-far-right-opacity": "0"
            });

            if (progress >= 1 && !completed) {
                completeMove("prev");
            }
        }
    }

    function completeMove(direction) {
        completed = true;
        isDragging = false;

        if (typeof window.playClickSound === "function") {
            window.playClickSound();
        }

        if (direction === "next") {
            index = wrap(index + 1);
        } else {
            index = wrap(index - 1);
        }

        setImages();
        resetHard();
    }

    function animateToComplete(direction) {
        completed = true;

        if (typeof window.playClickSound === "function") {
            window.playClickSound();
        }

        root.classList.remove("is-dragging");
        root.classList.add("is-snapping");

        if (direction === "next") {
            applyDrag(-maxDrag);

            setTimeout(() => {
                index = wrap(index + 1);
                setImages();
                resetHard();
            }, 220);
        } else {
            applyDrag(maxDrag);

            setTimeout(() => {
                index = wrap(index - 1);
                setImages();
                resetHard();
            }, 220);
        }
    }

    function snapBack() {
        root.classList.remove("is-dragging", "drag-next", "drag-prev");
        root.classList.add("is-snapping");

        setDefaultPosition();

        setTimeout(() => {
            root.classList.remove("is-snapping");
        }, 220);
    }

    function goNext() {
        animateToComplete("next");
    }

    function goPrev() {
        animateToComplete("prev");
    }

    function onPointerDown(e) {
        if (e.button !== undefined && e.button !== 0) return;

        isDragging = true;
        hasDragged = false;
        completed = false;
        pointerId = e.pointerId;

        startX = e.clientX;
        deltaX = 0;

        root.classList.remove("is-snapping", "drag-next", "drag-prev");
        root.classList.add("is-dragging");

        stage.setPointerCapture(pointerId);
    }

    function onPointerMove(e) {
        if (!isDragging || completed) return;

        deltaX = e.clientX - startX;

        if (Math.abs(deltaX) > 8) {
            hasDragged = true;
        }

        applyDrag(deltaX);
    }

    function onPointerUp() {
        if (!isDragging || completed) return;

        isDragging = false;

        if (pointerId !== null) {
            try {
                stage.releasePointerCapture(pointerId);
            } catch (_) {}
        }

        pointerId = null;

        if (deltaX <= -swipeThreshold) {
            animateToComplete("next");
        } else if (deltaX >= swipeThreshold) {
            animateToComplete("prev");
        } else {
            snapBack();
        }

        setTimeout(() => {
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
    resetHard();
}