document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".index-button");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const targetUrl = button.getAttribute("href");

            if (!targetUrl || button.classList.contains("is-animating")) {
                return;
            }

            button.classList.add("is-animating");
            button.classList.add("is-pressed");

            setTimeout(() => {
                button.classList.remove("is-pressed");
            }, 120);

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 220);
        });
    });
});