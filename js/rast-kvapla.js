document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("rastSlider");
    const media = document.getElementById("rastMedia");
    if (!slider || !media) return;

    const frameBase = "img/hry/rast-kvapla/frame";
    const gifSrc = "img/hry/rast-kvapla/rast-kvapla.gif";

    function showFrame(value) {
        const frame = String(Number(value) + 1).padStart(2, "0");
        const src = `${frameBase}-${frame}.png`;
        media.src = src;
        media.onerror = () => {
            media.onerror = null;
            media.src = gifSrc;
        };
    }

    slider.addEventListener("input", () => {
        if (typeof window.playClickSound === "function") window.playClickSound();
        showFrame(slider.value);
    });
});