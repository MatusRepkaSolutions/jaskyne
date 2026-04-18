document.addEventListener("DOMContentLoaded", () => {
    const caveButtons = document.querySelectorAll(".map2-button[data-cave]");
    const cookieDays = 30;

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length));
            }
        }

        return null;
    }

    caveButtons.forEach(button => {
        const caveName = button.dataset.cave;
        const cookieName = `visited_${caveName}`;

        // if already visited, stop pulsing
        if (getCookie(cookieName) === "1") {
            button.classList.add("visited");
        }

        // on click, save cookie immediately
        button.addEventListener("click", () => {
            setCookie(cookieName, "1", cookieDays);
            button.classList.add("visited");
        });
    });
});