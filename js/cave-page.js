document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cave-tab-btn');
    const contents = document.querySelectorAll('.cave-tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab-target');

            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');

            const targetContent = document.getElementById(`tab-${target}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        initCaveTabs();
        initCaveGallery();
    });

    function initCaveTabs() {
        const tabButtons = document.querySelectorAll(".cave-tab-btn");
        const tabContents = document.querySelectorAll(".cave-tab-content");

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                const target = button.dataset.tabTarget;

                tabButtons.forEach(btn => btn.classList.remove("active"));
                tabContents.forEach(content => content.classList.remove("active"));

                button.classList.add("active");

                const targetTab = document.getElementById(`tab-${target}`);
                if (targetTab) {
                    targetTab.classList.add("active");
                }

                if (target === "gallery") {
                    const galleryTab = document.getElementById("tab-gallery");
                    if (galleryTab) {
                        galleryTab.classList.add("gallery-ready");
                    }
                }
            });
        });
    }

    async function initCaveGallery() {
        const galleryRoot = document.getElementById("tab-gallery");
        if (!galleryRoot) return;

        const basePath = galleryRoot.dataset.galleryPath;
        const jsonPath = galleryRoot.dataset.galleryJson;

        if (!basePath || !jsonPath) return;

        const mainImg = galleryRoot.querySelector(".gallery-main-img");
        const leftImg = galleryRoot.querySelector(".gallery-side-left .gallery-side-img");
        const rightImg = galleryRoot.querySelector(".gallery-side-right .gallery-side-img");
        const prevBtn = galleryRoot.querySelector(".gallery-prev");
        const nextBtn = galleryRoot.querySelector(".gallery-next");
        const captionText = galleryRoot.querySelector(".gallery-caption-text");
        const captionAuthor = galleryRoot.querySelector(".gallery-caption-author");
        const leftSide = galleryRoot.querySelector(".gallery-side-left");
        const rightSide = galleryRoot.querySelector(".gallery-side-right");

        let images = [];
        let currentIndex = 0;

        try {
            const response = await fetch(jsonPath, { cache: "no-cache" });

            if (!response.ok) {
                throw new Error(`Failed to load ${jsonPath}`);
            }

            const jsonData = await response.json();

            images = jsonData.map(item => ({
                src: `${basePath}/${item.file}`,
                captionKey: item.captionKey || "",
                authorKey: item.authorKey || ""
            }));
        } catch (error) {
            console.error("Gallery JSON load error:", error);
            return;
        }

        function wrapIndex(index) {
            if (index < 0) return images.length - 1;
            if (index >= images.length) return 0;
            return index;
        }

        function getTranslatedText(key) {
            if (!key) return "";

            const translations = window.appTranslations || {};
            const lang = window.appLanguage || "svk";

            if (translations[key] && translations[key][lang] !== undefined) {
                return translations[key][lang];
            }

            return key;
        }

        function animateSwap() {
            [mainImg, leftImg, rightImg, captionText?.parentElement].forEach(el => {
                if (!el) return;
                el.classList.remove("is-changing");
                void el.offsetWidth;
                el.classList.add("is-changing");
            });
        }

        function updateGallery(withAnimation = false) {
            if (!images.length) return;

            const current = images[currentIndex];
            const prev = images[wrapIndex(currentIndex - 1)];
            const next = images[wrapIndex(currentIndex + 1)];

            mainImg.src = current.src;
            mainImg.alt = getTranslatedText(current.captionKey) || `Image ${currentIndex + 1}`;

            if (images.length > 1) {
                leftImg.src = prev.src;
                rightImg.src = next.src;

                leftImg.alt = getTranslatedText(prev.captionKey) || "";
                rightImg.alt = getTranslatedText(next.captionKey) || "";

                leftSide.classList.remove("empty");
                rightSide.classList.remove("empty");
                prevBtn.classList.remove("hidden");
                nextBtn.classList.remove("hidden");
            } else {
                leftImg.src = "";
                rightImg.src = "";
                leftSide.classList.add("empty");
                rightSide.classList.add("empty");
                prevBtn.classList.add("hidden");
                nextBtn.classList.add("hidden");
            }

            if (captionText) {
                captionText.textContent = getTranslatedText(current.captionKey);
            }

            if (captionAuthor) {
                captionAuthor.textContent = getTranslatedText(current.authorKey);
            }

            if (withAnimation) {
                animateSwap();
            }
        }

        function goNext() {
            currentIndex = wrapIndex(currentIndex + 1);
            updateGallery(true);
        }

        function goPrev() {
            currentIndex = wrapIndex(currentIndex - 1);
            updateGallery(true);
        }

        prevBtn?.addEventListener("click", goPrev);
        nextBtn?.addEventListener("click", goNext);

        galleryRoot.addEventListener("click", (e) => {
            if (e.target.closest(".gallery-side-left") && images.length > 1) {
                goPrev();
            }

            if (e.target.closest(".gallery-side-right") && images.length > 1) {
                goNext();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (!galleryRoot.classList.contains("active")) return;

            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        });

        let startX = 0;
        let endX = 0;

        galleryRoot.addEventListener("touchstart", (e) => {
            startX = e.changedTouches[0].clientX;
        }, { passive: true });

        galleryRoot.addEventListener("touchend", (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = endX - startX;

            if (Math.abs(diff) < 40) return;

            if (diff > 0) goPrev();
            if (diff < 0) goNext();
        }, { passive: true });

        updateGallery(false);

        const activeBtn = document.querySelector('.cave-tab-btn[data-tab-target="gallery"].active');
        if (activeBtn) {
            galleryRoot.classList.add("gallery-ready");
        }

        window.refreshGalleryTranslations = function () {
            updateGallery(false);
        };
    }
});