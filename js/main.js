document.addEventListener("DOMContentLoaded", () => {
    const supportedLanguages = ["svk", "hun", "eng"];
    const defaultLanguage = "svk";
    const cookieName = "lang";

    const inactivityLimit = 5 * 60 * 1000;
    let inactivityTimer = null;

    const clickSound = new Audio("data/drop.WAV");
    clickSound.preload = "auto";

    function playClickSound() {
        try {
            clickSound.pause();
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});
        } catch (error) {
            console.warn("Click sound failed:", error);
        }
    }

    window.playClickSound = playClickSound;

    function initInvisibleFullscreenButton() {
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", "Fullscreen");

        button.style.position = "fixed";
        button.style.left = "0";
        button.style.bottom = "0";
        button.style.width = "80px";
        button.style.height = "80px";
        button.style.opacity = "0";
        button.style.background = "transparent";
        button.style.border = "0";
        button.style.padding = "0";
        button.style.margin = "0";
        button.style.cursor = "default";
        button.style.zIndex = "999999";

        button.addEventListener("click", async () => {
            try {
                if (!document.fullscreenElement) {
                    await document.documentElement.requestFullscreen();
                } else {
                    await document.exitFullscreen();
                }
            } catch (error) {
                console.warn("Fullscreen failed:", error);
            }
        });

        document.body.appendChild(button);
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
            const cookie = cookies[i].trim();

            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length);
            }
        }

        return null;
    }

    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
    }

    function clearVisitedCookies() {
        const cookies = document.cookie.split(";");

        cookies.forEach((cookie) => {
            const trimmedCookie = cookie.trim();
            const equalIndex = trimmedCookie.indexOf("=");
            const name = equalIndex > -1
                ? trimmedCookie.substring(0, equalIndex)
                : trimmedCookie;

            if (name.startsWith("visited_")) {
                deleteCookie(name);
            }
        });

        document.querySelectorAll(".map2-button.visited").forEach((button) => {
            button.classList.remove("visited");
        });
    }

    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);

        inactivityTimer = setTimeout(() => {
            clearVisitedCookies();
            window.location.href = "index.html";
        }, inactivityLimit);
    }

    function initInactivityReset() {
        const activityEvents = [
            "mousemove",
            "mousedown",
            "click",
            "scroll",
            "keydown",
            "touchstart"
        ];

        activityEvents.forEach((eventName) => {
            document.addEventListener(eventName, resetInactivityTimer, { passive: true });
        });

        resetInactivityTimer();
    }

    function getCurrentLanguage() {
        const cookieLanguage = getCookie(cookieName);

        if (cookieLanguage && supportedLanguages.includes(cookieLanguage)) {
            return cookieLanguage;
        }

        setCookie(cookieName, defaultLanguage);
        return defaultLanguage;
    }

    function mergeTranslations(...translationSets) {
        const merged = {};

        translationSets.forEach((set) => {
            if (!set || typeof set !== "object") return;

            Object.keys(set).forEach((key) => {
                if (
                    typeof set[key] === "object" &&
                    set[key] !== null &&
                    !Array.isArray(set[key])
                ) {
                    merged[key] = {
                        ...(merged[key] || {}),
                        ...set[key]
                    };
                } else {
                    merged[key] = set[key];
                }
            });
        });

        return merged;
    }

    async function loadJsonFile(path) {
        const version = "2026-05-18";
        const separator = path.includes("?") ? "&" : "?";
        const url = `${path}${separator}v=${version}`;

        const response = await fetch(url, { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`Failed to load ${path}`);
        }

        return await response.json();
    }

    async function loadTranslations() {
        const pageName = document.body.dataset.translationPage || "index";

        const filesToLoad = [
            "data/translations/global.json",
            `data/translations/${pageName}.json`
        ];

        const loadedTranslations = [];

        for (const file of filesToLoad) {
            try {
                const json = await loadJsonFile(file);
                loadedTranslations.push(json);
            } catch (error) {
                console.warn(`Translation file skipped: ${file}`, error);
            }
        }

        if (loadedTranslations.length === 0) {
            throw new Error("No translation files could be loaded.");
        }

        return mergeTranslations(...loadedTranslations);
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

    window.applyAppTranslations = function () {
        if (!window.appTranslations || !window.appLanguage) return;
        applyTranslations(window.appTranslations, window.appLanguage);
    };

    function updateLanguageButtons(lang) {
        const buttons = document.querySelectorAll("[data-lang-switch]");

        buttons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.langSwitch === lang);
        });
    }

    function bindLanguageSwitching(translations) {
        const buttons = document.querySelectorAll("[data-lang-switch]");

        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                event.preventDefault();

                playClickSound();

                const selectedLanguage = button.dataset.langSwitch;

                if (!supportedLanguages.includes(selectedLanguage)) {
                    return;
                }

                setCookie(cookieName, selectedLanguage);

                window.appLanguage = selectedLanguage;
                window.appTranslations = translations;

                applyTranslations(translations, selectedLanguage);
                updateLanguageButtons(selectedLanguage);

                document.documentElement.setAttribute("lang", selectedLanguage);
                document.body.setAttribute("data-current-lang", selectedLanguage);

                if (typeof window.refreshGalleryTranslations === "function") {
                    window.refreshGalleryTranslations();
                }

                document.dispatchEvent(new CustomEvent("languageChanged", {
                    detail: {
                        translations,
                        lang: selectedLanguage
                    }
                }));
            });
        });
    }

    function initRedirectButtons() {
        const redirectButtons = document.querySelectorAll(
            ".map-nav-btn, .global-nav-btn, .home-button, .map2-button, .hry-btn, .hry-btn-hra, .hry-btn-picked, .hry-btn-restart"
        );

        redirectButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const targetUrl = button.getAttribute("href");
                if (!targetUrl) return;

                event.preventDefault();
                playClickSound();

                if (button.classList.contains("home-button")) {
                    clearVisitedCookies();
                }

                redirectButtons.forEach((btn) => {
                    btn.classList.remove("button-anim-global-active");
                });

                button.classList.remove("map-nav-btn-reveal");

                void button.offsetWidth;

                button.classList.add("button-anim-global-active");

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 450);
            });
        });
    }

    window.translationsReady = (async () => {
        try {
            const translations = await loadTranslations();
            const currentLanguage = getCurrentLanguage();

            window.appLanguage = currentLanguage;
            window.appTranslations = translations;

            applyTranslations(translations, currentLanguage);
            updateLanguageButtons(currentLanguage);
            bindLanguageSwitching(translations);

            document.documentElement.setAttribute("lang", currentLanguage);
            document.body.setAttribute("data-current-lang", currentLanguage);
            document.body.classList.add("translations-loaded");

            document.dispatchEvent(new CustomEvent("translationsReady", {
                detail: {
                    translations,
                    lang: currentLanguage
                }
            }));

            return {
                translations,
                lang: currentLanguage
            };
        } catch (error) {
            console.error("Translation initialization failed:", error);
            document.body.classList.add("translations-loaded");
            return null;
        }
    })();

    initRedirectButtons();
    initCustomScrollbars();
    initInvisibleFullscreenButton();
    initInactivityReset();
});

function initCustomScrollbars() {
    const containers = document.querySelectorAll(".custom-scroll");

    containers.forEach((container) => {
        if (container.querySelector(".custom-scroll-inner")) {
            return;
        }

        const inner = document.createElement("div");
        inner.classList.add("custom-scroll-inner");

        while (container.firstChild) {
            inner.appendChild(container.firstChild);
        }

        container.appendChild(inner);

        const track = document.createElement("div");
        track.classList.add("custom-scroll-track");

        const thumb = document.createElement("div");
        thumb.classList.add("custom-scroll-thumb");

        track.appendChild(thumb);
        container.appendChild(track);

        function updateThumb() {
            const scrollHeight = inner.scrollHeight - inner.clientHeight;
            const maxTop = track.clientHeight - thumb.clientHeight;

            if (scrollHeight <= 0) {
                thumb.style.top = "0px";
                track.style.opacity = "0";
                return;
            }

            track.style.opacity = "1";

            const scrollRatio = inner.scrollTop / scrollHeight;
            thumb.style.top = `${scrollRatio * maxTop}px`;
        }

        inner.addEventListener("scroll", updateThumb);

        let isDragging = false;

        thumb.addEventListener("mousedown", () => {
            isDragging = true;
            document.body.style.userSelect = "none";
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            document.body.style.userSelect = "";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;

            const rect = track.getBoundingClientRect();
            let offset = e.clientY - rect.top - thumb.clientHeight / 2;

            const maxTop = track.clientHeight - thumb.clientHeight;
            offset = Math.max(0, Math.min(offset, maxTop));

            const scrollRatio = maxTop > 0 ? offset / maxTop : 0;
            inner.scrollTop = scrollRatio * (inner.scrollHeight - inner.clientHeight);
        });

        updateThumb();
        window.addEventListener("resize", updateThumb);
    });
}