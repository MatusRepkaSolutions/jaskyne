document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("rastSlider");
    const media = document.getElementById("rastMedia");
    if (!slider || !media) return;

    const framePath = "img/hry/rast-kvapla";
    const frameCount = 8;
    const fallbackSrc = `${framePath}/00.png`;

    slider.min = "0";
    slider.max = String(frameCount - 1);
    slider.step = "1";

    const frames = Array.from({ length: frameCount }, (_, index) => {
        return `${framePath}/${String(index).padStart(2, "0")}.png`;
    });

    frames.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    function showFrame(value) {
        const index = Math.max(0, Math.min(frameCount - 1, Number(value) || 0));
        const src = frames[index];

        media.onerror = () => {
            media.onerror = null;
            media.src = fallbackSrc;
        };

        media.src = src;
    }

    slider.addEventListener("input", () => {
        if (typeof window.playClickSound === "function") window.playClickSound();
        showFrame(slider.value);
    });

    showFrame(slider.value);
});
