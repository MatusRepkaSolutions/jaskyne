document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".index-button");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const targetUrl = button.getAttribute("href");

            if (!targetUrl) {
                return;
            }

            if (button.classList.contains("is-pressed")) {
                return;
            }

            button.classList.add("is-pressed");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 140);
        });
    });
});