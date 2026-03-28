document.addEventListener("DOMContentLoaded", async () => {
    const supportedLanguages = ["svk", "hun", "eng"];
    const defaultLanguage = "svk";
    const cookieName = "lang";

    function getUrlLanguage() {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get("lang");

        if (lang && supportedLanguages.includes(lang)) {
            return lang;
        }

        return null;
    }

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
        const urlLanguage = getUrlLanguage();
        if (urlLanguage) {
            setCookie(cookieName, urlLanguage);
            return urlLanguage;
        }

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

            if (
                translations[key] &&
                translations[key][lang] !== undefined
            ) {
                element.textContent = translations[key][lang];
            }
        });
    }

    function updateLanguageLinks(lang) {
        const languageLinks = document.querySelectorAll("[data-lang-switch]");

        languageLinks.forEach((link) => {
            const targetLang = link.dataset.langSwitch;
            const url = new URL(link.getAttribute("href"), window.location.origin);

            url.searchParams.set("lang", targetLang);
            link.setAttribute("href", url.pathname + url.search);
        });
    }

    try {
        const currentLanguage = getCurrentLanguage();
        const translations = await loadTranslations();

        applyTranslations(translations, currentLanguage);
        updateLanguageLinks(currentLanguage);

        document.documentElement.setAttribute("lang", currentLanguage);
        document.body.setAttribute("data-current-lang", currentLanguage);

        window.appLanguage = currentLanguage;
        window.appTranslations = translations;
    } catch (error) {
        console.error("Translation initialization failed:", error);
    }
});