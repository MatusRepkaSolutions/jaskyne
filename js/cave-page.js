document.addEventListener("DOMContentLoaded", () => {
    initCaveTabs();
    initCaveGallery();
});

function initCaveTabs() {
    const tabButtons = document.querySelectorAll(".cave-tab-btn");
    const tabPanels = document.querySelectorAll(".cave-tab-panel");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.dataset.tabTarget;

            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabPanels.forEach((panel) => panel.classList.remove("active"));

            button.classList.add("active");

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

    const mainImg = root.querySelector(".gallery-main-img");
    const leftImg = root.querySelector(".gallery-side-left img");
    const rightImg = root.querySelector(".gallery-side-right img");
    const leftSide = root.querySelector(".gallery-side-left");
    const rightSide = root.querySelector(".gallery-side-right");

    const captions = root.querySelectorAll(".gallery-caption-item");

    let index = 0;

    function wrap(i) {
        if (i < 0) return count - 1;
        if (i >= count) return 0;
        return i;
    }

    function update(direction = null) {
        const prev = wrap(index - 1);
        const next = wrap(index + 1);

        mainImg.src = `${basePath}/${index + 1}.jpg`;
        leftImg.src = `${basePath}/${prev + 1}.jpg`;
        rightImg.src = `${basePath}/${next + 1}.jpg`;

        // captions
        captions.forEach(c => c.classList.remove("active"));
        const active = root.querySelector(`.gallery-caption-item[data-index="${index}"]`);
        if (active) active.classList.add("active");

        // animation
        root.classList.remove("gallery-anim-next", "gallery-anim-prev");

        if (direction === "next") {
            root.classList.add("gallery-anim-next");
        } else if (direction === "prev") {
            root.classList.add("gallery-anim-prev");
        }
    }

    function goNext() {
        index = wrap(index + 1);
        update("next");
    }

    function goPrev() {
        index = wrap(index - 1);
        update("prev");
    }

    leftSide.addEventListener("click", goPrev);
    rightSide.addEventListener("click", goNext);

    update();
}