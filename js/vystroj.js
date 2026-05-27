document.addEventListener("DOMContentLoaded", () => {
    initVystrojJaskyniara();
});

function initVystrojJaskyniara() {
    const board = document.getElementById("vystrojBoard");
    const restartButton = document.getElementById("vystrojRestart");
    const status = document.getElementById("vystrojStatus");

    if (!board) return;

    const basePath = "img/hry/vystroj/";
    const invertPath = "img/hry/vystroj/invert/";

    const itemSize = 252;
    const dropSize = 286;

    const items = [
        { id: 1, x: 58, y: 415 },
        { id: 2, x: 414, y: 415 },
        { id: 3, x: 58, y: 770 },
        { id: 4, x: 414, y: 770 },
        { id: 5, x: 58, y: 1126 },
        { id: 6, x: 414, y: 1126 },

        { id: 7, x: 2250, y: 58 },
        { id: 8, x: 2606, y: 58 },
        { id: 9, x: 2250, y: 415 },
        { id: 10, x: 2606, y: 415 },
        { id: 11, x: 2250, y: 770 },
        { id: 12, x: 2606, y: 770 },
        { id: 13, x: 2250, y: 1126 },
        { id: 14, x: 2606, y: 1126 }
    ];

    const drops = [
        { accepts: 4, x: 966, y: 86 },
        { accepts: 12, x: 1598, y: 86 },
        { accepts: 11, x: 870, y: 420 },
        { accepts: 10, x: 1722, y: 420 },
        { accepts: 1, x: 925, y: 745 },
        { accepts: 7, x: 1660, y: 745 },
        { accepts: 6, x: 925, y: 1085 },
        { accepts: 8, x: 1660, y: 1085 }
    ];

    let placedCount = 0;
    let activeDrag = null;

    function playClick() {
        if (typeof window.playClickSound === "function") {
            window.playClickSound();
        }
    }

    function setStatus(text) {
        if (status) status.textContent = text;
    }

    function renderGame() {
        board.querySelectorAll(".vystroj-item, .vystroj-drop, .vystroj-placed-img").forEach((el) => {
            el.remove();
        });

        placedCount = 0;
        activeDrag = null;

        setStatus("Priraď správnu výstroj, ktorú jaskyniar potrebuje do jaskyne.");

        drops.forEach((drop, index) => {
            const dropEl = document.createElement("div");
            dropEl.className = "vystroj-drop";
            dropEl.dataset.accepts = String(drop.accepts);
            dropEl.dataset.dropIndex = String(index);
            dropEl.style.left = `${drop.x}px`;
            dropEl.style.top = `${drop.y}px`;

            board.appendChild(dropEl);
        });

        items.forEach((item) => {
            const itemEl = document.createElement("button");
            itemEl.className = "vystroj-item";
            itemEl.type = "button";
            itemEl.dataset.itemId = String(item.id);
            itemEl.dataset.startX = String(item.x);
            itemEl.dataset.startY = String(item.y);
            itemEl.style.left = `${item.x}px`;
            itemEl.style.top = `${item.y}px`;

            itemEl.innerHTML = `<img src="${basePath}${item.id}.png" alt="">`;

            itemEl.addEventListener("pointerdown", startDrag);

            board.appendChild(itemEl);
        });
    }

    function startDrag(event) {
        const itemEl = event.currentTarget;

        if (itemEl.classList.contains("placed")) return;

        playClick();

        const boardRect = board.getBoundingClientRect();
        const itemRect = itemEl.getBoundingClientRect();

        activeDrag = {
            el: itemEl,
            pointerId: event.pointerId,
            offsetX: event.clientX - itemRect.left,
            offsetY: event.clientY - itemRect.top,
            boardRect
        };

        itemEl.setPointerCapture(event.pointerId);
        itemEl.classList.add("dragging");

        window.addEventListener("pointermove", moveDrag);
        window.addEventListener("pointerup", endDrag);
        window.addEventListener("pointercancel", cancelDrag);
    }

    function moveDrag(event) {
        if (!activeDrag) return;

        const scaleX = 2940 / activeDrag.boardRect.width;
        const scaleY = 1335 / activeDrag.boardRect.height;

        const x = (event.clientX - activeDrag.boardRect.left - activeDrag.offsetX) * scaleX;
        const y = (event.clientY - activeDrag.boardRect.top - activeDrag.offsetY) * scaleY;

        activeDrag.el.style.left = `${x}px`;
        activeDrag.el.style.top = `${y}px`;

        highlightDrop(activeDrag.el);
    }

    function endDrag() {
        if (!activeDrag) return;

        const itemEl = activeDrag.el;
        const itemId = Number(itemEl.dataset.itemId);
        const matchingDrop = getDropUnderItem(itemEl);

        clearDropHighlights();

        itemEl.classList.remove("dragging");

        if (matchingDrop && Number(matchingDrop.dataset.accepts) === itemId) {
            placeItem(itemEl, matchingDrop);
        } else {
            returnItem(itemEl);
        }

        cleanupDrag();
    }

    function cancelDrag() {
        if (!activeDrag) return;

        activeDrag.el.classList.remove("dragging");
        returnItem(activeDrag.el);
        clearDropHighlights();
        cleanupDrag();
    }

    function cleanupDrag() {
        if (activeDrag && activeDrag.el.hasPointerCapture(activeDrag.pointerId)) {
            activeDrag.el.releasePointerCapture(activeDrag.pointerId);
        }

        activeDrag = null;

        window.removeEventListener("pointermove", moveDrag);
        window.removeEventListener("pointerup", endDrag);
        window.removeEventListener("pointercancel", cancelDrag);
    }

    function getDropUnderItem(itemEl) {
        const itemCenter = {
            x: parseFloat(itemEl.style.left) + itemSize / 2,
            y: parseFloat(itemEl.style.top) + itemSize / 2
        };

        const dropEls = [...board.querySelectorAll(".vystroj-drop")];

        return dropEls.find((dropEl) => {
            const x = parseFloat(dropEl.style.left);
            const y = parseFloat(dropEl.style.top);

            return (
                itemCenter.x >= x &&
                itemCenter.x <= x + dropSize &&
                itemCenter.y >= y &&
                itemCenter.y <= y + dropSize
            );
        });
    }

    function highlightDrop(itemEl) {
        const dropUnderItem = getDropUnderItem(itemEl);

        board.querySelectorAll(".vystroj-drop").forEach((dropEl) => {
            dropEl.classList.toggle("active", dropEl === dropUnderItem);
        });
    }

    function clearDropHighlights() {
        board.querySelectorAll(".vystroj-drop").forEach((dropEl) => {
            dropEl.classList.remove("active");
        });
    }

    function placeItem(itemEl, dropEl) {
        const itemId = Number(itemEl.dataset.itemId);
        const dropX = parseFloat(dropEl.style.left);
        const dropY = parseFloat(dropEl.style.top);

        itemEl.classList.add("placed");

        const placedImg = document.createElement("img");
        placedImg.className = "vystroj-placed-img";
        placedImg.src = `${invertPath}${itemId}.png`;
        placedImg.alt = "";
        placedImg.style.left = `${dropX + 17}px`;
        placedImg.style.top = `${dropY + 17}px`;

        board.appendChild(placedImg);

        placedCount++;

        if (placedCount >= drops.length) {
            setStatus("Výborne! Priradil si všetku správnu výstroj.");
        } else {
            setStatus("Správne.");
        }
    }

    function returnItem(itemEl) {
        itemEl.style.left = `${itemEl.dataset.startX}px`;
        itemEl.style.top = `${itemEl.dataset.startY}px`;

        itemEl.animate(
            [
                { transform: "scale(1.08)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 180,
                easing: "ease-out"
            }
        );

        setStatus("Skús iný predmet alebo iné miesto.");
    }

    if (restartButton) {
        restartButton.addEventListener("click", () => {
            playClick();

            restartButton.classList.remove("button-anim-global-active");
            void restartButton.offsetWidth;
            restartButton.classList.add("button-anim-global-active");

            setTimeout(() => {
                renderGame();
            }, 250);
        });
    }

    renderGame();
}