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

    let index = 0;
    let startX = 0;
    let currentX = 0;
    let deltaX = 0;
    let isDragging = false;
    let hasDragged = false;
    let pointerId = null;

    const swipeThreshold = 120;
    const maxDrag = 520;

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

    function resetTransforms() {
        root.style.setProperty("--gallery-drag", "0px");
        root.style.setProperty("--gallery-progress", "0");
        root.classList.remove("is-dragging");
    }

    function applyDrag(x) {
        const limited = Math.max(-maxDrag, Math.min(maxDrag, x));
        const progress = Math.min(Math.abs(limited) / maxDrag, 1);

        root.style.setProperty("--gallery-drag", `${limited}px`);
        root.style.setProperty("--gallery-progress", progress.toString());
    }

    function snapBack() {
        root.classList.add("is-snapping");
        resetTransforms();

        window.setTimeout(() => {
            root.classList.remove("is-snapping");
        }, 360);
    }

    function goNext(fromSwipe = false) {
        if (!fromSwipe && typeof window.playClickSound === "function") {
            window.playClickSound();
        }

        root.classList.remove("gallery-anim-prev", "gallery-anim-next");
        void root.offsetWidth;

        index = wrap(index + 1);
        setImages();

        root.classList.add("gallery-anim-next");

        window.setTimeout(() => {
            root.classList.remove("gallery-anim-next");
        }, 520);
    }

    function goPrev(fromSwipe = false) {
        if (!fromSwipe && typeof window.playClickSound === "function") {
            window.playClickSound();
        }

        root.classList.remove("gallery-anim-prev", "gallery-anim-next");
        void root.offsetWidth;

        index = wrap(index - 1);
        setImages();

        root.classList.add("gallery-anim-prev");

        window.setTimeout(() => {
            root.classList.remove("gallery-anim-prev");
        }, 520);
    }

    function finishSwipe(direction) {
        if (typeof window.playClickSound === "function") {
            window.playClickSound();
        }

        root.classList.add("is-snapping");

        if (direction === "next") {
            root.style.setProperty("--gallery-drag", `-${maxDrag}px`);
            root.style.setProperty("--gallery-progress", "1");
        } else {
            root.style.setProperty("--gallery-drag", `${maxDrag}px`);
            root.style.setProperty("--gallery-progress", "1");
        }

        window.setTimeout(() => {
            if (direction === "next") {
                index = wrap(index + 1);
            } else {
                index = wrap(index - 1);
            }

            setImages();
            resetTransforms();
            root.classList.remove("is-snapping");
        }, 260);
    }

    function onPointerDown(e) {
        if (e.button !== undefined && e.button !== 0) return;

        isDragging = true;
        hasDragged = false;
        pointerId = e.pointerId;

        startX = e.clientX;
        currentX = e.clientX;
        deltaX = 0;

        root.classList.remove("is-snapping", "gallery-anim-next", "gallery-anim-prev");
        root.classList.add("is-dragging");

        stage.setPointerCapture(pointerId);
    }

    function onPointerMove(e) {
        if (!isDragging) return;

        currentX = e.clientX;
        deltaX = currentX - startX;

        if (Math.abs(deltaX) > 8) {
            hasDragged = true;
        }

        applyDrag(deltaX);
    }

    function onPointerUp(e) {
        if (!isDragging) return;

        isDragging = false;

        if (pointerId !== null) {
            try {
                stage.releasePointerCapture(pointerId);
            } catch (_) {}
        }

        pointerId = null;

        if (deltaX <= -swipeThreshold) {
            finishSwipe("next");
        } else if (deltaX >= swipeThreshold) {
            finishSwipe("prev");
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

        goPrev(false);
    });

    rightSide.addEventListener("click", (e) => {
        if (hasDragged) {
            e.preventDefault();
            return;
        }

        goNext(false);
    });

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", onPointerUp);
    stage.addEventListener("pointercancel", onPointerUp);
    stage.addEventListener("pointerleave", () => {
        if (isDragging) onPointerUp({});
    });

    setImages();
    resetTransforms();
}