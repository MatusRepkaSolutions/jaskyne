document.addEventListener("DOMContentLoaded", async () => {
    if (window.translationsReady) {
        await window.translationsReady;
    }

    initCaveTabs();
    initCaveGallery();

    if (typeof window.applyAppTranslations === "function") {
        window.applyAppTranslations();
    }
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

                if (typeof window.applyAppTranslations === "function") {
                    window.applyAppTranslations();
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
    const captionItems = Array.from(
        root.querySelectorAll(".gallery-caption-item")
    );

    if (!stage) return;

    stage.innerHTML = "";

    const track = document.createElement("div");
    track.className = "gallery-track";

    stage.appendChild(track);

    const slides = [];
    const imageSources = [];

    for (let i = 0; i < count; i++) {
        const src = `${basePath}/${i + 1}.jpg`;
        imageSources.push(src);

        const preload = new Image();
        preload.src = src;

        const slide = document.createElement("div");
        slide.className = "gallery-slide";
        slide.dataset.index = i;

        const img = document.createElement("img");
        img.className = "gallery-slide-img";
        img.src = src;
        img.alt = "";

        slide.appendChild(img);

        const caption = captionItems.find(
            (c) => parseInt(c.dataset.index || "0", 10) === i
        );

        if (caption) {
            const captionClone = caption.cloneNode(true);
            captionClone.classList.add("gallery-slide-caption");
            slide.appendChild(captionClone);
        }

        track.appendChild(slide);
        slides.push(slide);
    }

    const oldCaptions = root.querySelector(".gallery-captions");
    if (oldCaptions) {
        oldCaptions.remove();
    }

    window.refreshGalleryTranslations = function () {
        if (typeof window.applyAppTranslations === "function") {
            window.applyAppTranslations();
        }
    };

    if (typeof window.applyAppTranslations === "function") {
        window.applyAppTranslations();
    }

    let index = 0;
    let currentTranslate = 0;
    let dragStartX = 0;
    let dragStartTranslate = 0;
    let isDragging = false;
    let didDrag = false;
    let pointerId = null;

    const slideGap = 1160;
    const dragThreshold = 90;

    function wrap(i) {
        while (i < 0) i += count;
        while (i >= count) i -= count;
        return i;
    }

    function shortestOffset(slideIndex, activeIndex) {
        let offset = slideIndex - activeIndex;

        if (offset > count / 2) offset -= count;
        if (offset < -count / 2) offset += count;

        return offset;
    }

    function getNearestIndex(translate) {
        const raw = -translate / slideGap;
        return wrap(Math.round(raw));
    }

    function render(translate = currentTranslate) {
        currentTranslate = translate;

        const virtualCenter = -translate / slideGap;

        slides.forEach((slide, i) => {
            let offset = i - virtualCenter;

            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const abs = Math.abs(offset);

            let x = offset * slideGap;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (abs < 1) {
                scale = 1 - abs * 0.52;
                opacity = 1 - abs * 0.72;
                zIndex = 100 - Math.round(abs * 10);
            } else if (abs < 2) {
                scale = 0.48;
                opacity = 0.28 * (2 - abs);
                zIndex = 50 - Math.round(abs * 10);
            } else {
                scale = 0.48;
                opacity = 0;
                zIndex = 1;
            }

            slide.style.transform =
                `translate(-50%, -50%) translateX(${x}px) scale(${scale})`;

            slide.style.opacity = opacity.toString();
            slide.style.zIndex = zIndex.toString();

            slide.classList.toggle("is-center", abs < 0.5);
            slide.classList.toggle("is-side", abs >= 0.5 && abs < 1.5);
        });
    }

    function snapTo(newIndex, withSound = true) {
        index = wrap(newIndex);

        if (withSound && typeof window.playClickSound === "function") {
            window.playClickSound();
        }

        root.classList.remove("is-dragging");
        root.classList.add("is-snapping");

        currentTranslate = -index * slideGap;

        render(currentTranslate);

        window.setTimeout(() => {
            root.classList.remove("is-snapping");
        }, 320);
    }

    function onPointerDown(e) {
        if (e.button !== undefined && e.button !== 0) return;

        isDragging = true;
        didDrag = false;
        pointerId = e.pointerId;

        dragStartX = e.clientX;
        dragStartTranslate = currentTranslate;

        root.classList.remove("is-snapping");
        root.classList.add("is-dragging");

        stage.setPointerCapture(pointerId);
    }

    function onPointerMove(e) {
        if (!isDragging) return;

        const dx = e.clientX - dragStartX;

        if (Math.abs(dx) > 8) {
            didDrag = true;
        }

        render(dragStartTranslate + dx);
    }

    function onPointerUp() {
        if (!isDragging) return;

        isDragging = false;

        if (pointerId !== null) {
            try {
                stage.releasePointerCapture(pointerId);
            } catch (_) {}
        }

        pointerId = null;

        const moved = currentTranslate - dragStartTranslate;
        let targetIndex = getNearestIndex(currentTranslate);

        if (Math.abs(moved) > dragThreshold) {
            if (moved < 0) {
                targetIndex = wrap(index + 1);
            } else {
                targetIndex = wrap(index - 1);
            }
        }

        snapTo(targetIndex, didDrag);

        window.setTimeout(() => {
            didDrag = false;
        }, 120);
    }

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", onPointerUp);
    stage.addEventListener("pointercancel", onPointerUp);

    stage.addEventListener("click", (e) => {
        if (didDrag) {
            e.preventDefault();
            return;
        }

        const slide = e.target.closest(".gallery-slide");
        if (!slide) return;

        const clickedIndex = parseInt(slide.dataset.index || "0", 10);
        const offset = shortestOffset(clickedIndex, index);

        if (offset === 0) return;

        if (offset > 0) {
            snapTo(index + 1);
        } else {
            snapTo(index - 1);
        }
    });

    snapTo(0, false);
}

document.addEventListener("DOMContentLoaded", () => {
    initCaveVideo();
});

function initCaveVideo() {
    const videoPanel = document.getElementById("tab-video");
    const video = document.getElementById("caveVideo");

    if (!videoPanel || !video) return;

    const videoBase = videoPanel.dataset.videoBase;

    const langToVideoSuffix = {
        svk: "SK",
        eng: "EN",
        hun: "HU"
    };

    function getCurrentLanguage() {
        return (
            localStorage.getItem("selectedLanguage") ||
            localStorage.getItem("language") ||
            document.documentElement.lang ||
            "svk"
        );
    }

    function setVideoByLanguage() {
        const lang = getCurrentLanguage();
        const suffix = langToVideoSuffix[lang] || "SK";
        const newSrc = `videos/${videoBase}-${suffix}.mp4`;

        const currentSrc = video.getAttribute("src");

        if (currentSrc === newSrc) return;

        video.pause();
        video.setAttribute("src", newSrc);
        video.load();
    }

    setVideoByLanguage();

    document.querySelectorAll("[data-lang-switch]").forEach((button) => {
        button.addEventListener("click", () => {
            setTimeout(setVideoByLanguage, 80);
        });
    });
}