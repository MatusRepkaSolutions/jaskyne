document.addEventListener("DOMContentLoaded", async () => {
    const supportedLanguages = ["svk", "hun", "eng"];
    const defaultLanguage = "svk";
    const cookieName = "lang";

    function setCookie(name, value, days = 365) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
    }

    function getCookie(name) {
        const nameEQ = `${name}=`;
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();

            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length);
            }
        }

        return null;
    }

    function getCurrentLanguage() {
        const cookieLanguage = getCookie(cookieName);

        if (cookieLanguage && supportedLanguages.includes(cookieLanguage)) {
            return cookieLanguage;
        }

        setCookie(cookieName, defaultLanguage);
        return defaultLanguage;
    }

    async function loadTranslations() {
        const response = await fetch("translation.json", { cache: "no-cache" });

        if (!response.ok) {
            throw new Error("Failed to load translation.json");
        }

        return await response.json();
    }

    function applyTranslations(translations, lang) {
        const elements = document.querySelectorAll("[data-txt]");

        elements.forEach((element) => {
            const key = element.dataset.txt;

            if (translations[key] && translations[key][lang] !== undefined) {
                element.textContent = translations[key][lang];
            }
        });
    }

    function updateLanguageButtons(lang) {
        const buttons = document.querySelectorAll("[data-lang-switch]");

        buttons.forEach((button) => {
            if (button.dataset.langSwitch === lang) {
                button.classList.add("is-active");
            } else {
                button.classList.remove("is-active");
            }
        });
    }

    function bindLanguageSwitching(translations) {
        const buttons = document.querySelectorAll("[data-lang-switch]");

        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                event.preventDefault();

                const selectedLanguage = button.dataset.langSwitch;

                if (!supportedLanguages.includes(selectedLanguage)) {
                    return;
                }

                setCookie(cookieName, selectedLanguage);
                applyTranslations(translations, selectedLanguage);
                updateLanguageButtons(selectedLanguage);

                document.documentElement.setAttribute("lang", selectedLanguage);
                document.body.setAttribute("data-current-lang", selectedLanguage);
                window.appLanguage = selectedLanguage;
            });
        });
    }

    try {
        const translations = await loadTranslations();
        const currentLanguage = getCurrentLanguage();

        applyTranslations(translations, currentLanguage);
        updateLanguageButtons(currentLanguage);
        bindLanguageSwitching(translations);

        document.documentElement.setAttribute("lang", currentLanguage);
        document.body.setAttribute("data-current-lang", currentLanguage);

        window.appLanguage = currentLanguage;
        window.appTranslations = translations;
    } catch (error) {
        console.error("Translation initialization failed:", error);
    }

    // Wrap content
    const inner = document.createElement('div');
    inner.classList.add('custom-scroll-inner');

    while (container.firstChild) {
        inner.appendChild(container.firstChild);
    }

    container.appendChild(inner);

    // Create track
    const track = document.createElement('div');
    track.classList.add('custom-scroll-track');

    // Create thumb (dot)
    const thumb = document.createElement('div');
    thumb.classList.add('custom-scroll-thumb');

    track.appendChild(thumb);
    container.appendChild(track);

    // Scroll sync
    inner.addEventListener('scroll', () => {
        const scrollRatio = inner.scrollTop / (inner.scrollHeight - inner.clientHeight);
        const maxTop = track.clientHeight - thumb.clientHeight;
        thumb.style.top = `${scrollRatio * maxTop}px`;
    });

    // Dragging
    let isDragging = false;

    thumb.addEventListener('mousedown', () => {
        isDragging = true;
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.userSelect = '';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const rect = track.getBoundingClientRect();
        let offset = e.clientY - rect.top - thumb.clientHeight / 2;

        const maxTop = track.clientHeight - thumb.clientHeight;
        offset = Math.max(0, Math.min(offset, maxTop));

        const scrollRatio = offset / maxTop;
        inner.scrollTop = scrollRatio * (inner.scrollHeight - inner.clientHeight);
    });

    // Initial position fix
    inner.dispatchEvent(new Event('scroll'));
});