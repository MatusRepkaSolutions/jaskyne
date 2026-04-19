document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".index-button");
    const cookieName = "lang";

    function setCookie(name, value, days = 365) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const targetUrl = button.getAttribute("href");
            const selectedLanguage = button.dataset.setLang;
            window.playClickSound();

            if (!targetUrl || !selectedLanguage || button.classList.contains("is-animating")) {
                return;
            }

            button.classList.add("is-animating");
            button.classList.add("is-ready");
            button.classList.add("is-pressed");

            setCookie(cookieName, selectedLanguage);

            setTimeout(() => {
                button.classList.remove("is-pressed");
            }, 120);

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 220);
        });
    });
});