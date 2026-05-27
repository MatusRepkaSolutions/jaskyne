document.addEventListener("DOMContentLoaded", () => {
    initPexeso();
});

function initPexeso() {
    const board = document.getElementById("pexesoBoard");
    const restartButton = document.getElementById("pexesoRestart");
    const status = document.getElementById("pexesoStatus");

    if (!board) return;

    const backImage = "img/hry/pexeso/p0.png";

    const cardImages = [
        "img/hry/pexeso/p1.png",
        "img/hry/pexeso/p2.png",
        "img/hry/pexeso/p3.png",
        "img/hry/pexeso/p4.png",
        "img/hry/pexeso/p5.png",
        "img/hry/pexeso/p6.png",
        "img/hry/pexeso/p7.png",
        "img/hry/pexeso/p8.png"
    ];

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let matchedPairs = 0;

    function playClick() {
        if (typeof window.playClickSound === "function") {
            window.playClickSound();
        }
    }

    function shuffle(array) {
        const copy = [...array];

        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        return copy;
    }

    function createDeck() {
        const pairs = cardImages.flatMap((src, index) => [
            { id: index, src },
            { id: index, src }
        ]);

        return shuffle(pairs);
    }

    function renderBoard() {
        board.innerHTML = "";
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        matchedPairs = 0;

        if (status) {
            status.textContent = "Nájdi dvojice.";
        }

        const deck = createDeck();

        deck.forEach((cardData) => {
            const card = document.createElement("button");
            card.className = "pexeso-card";
            card.type = "button";
            card.dataset.cardId = cardData.id;

            card.innerHTML = `
                <span class="pexeso-card-inner">
                    <span class="pexeso-card-face pexeso-card-back">
                        <img src="${backImage}" alt="">
                    </span>

                    <span class="pexeso-card-face pexeso-card-front">
                        <img src="${cardData.src}" alt="">
                    </span>
                </span>
            `;

            card.addEventListener("click", () => handleCardClick(card));
            board.appendChild(card);
        });
    }

    function handleCardClick(card) {
        if (lockBoard) return;
        if (card === firstCard) return;
        if (card.classList.contains("flipped")) return;
        if (card.classList.contains("matched")) return;

        playClick();

        card.classList.add("flipped");

        if (!firstCard) {
            firstCard = card;
            return;
        }

        secondCard = card;
        lockBoard = true;

        checkCards();
    }

    function checkCards() {
        const isMatch = firstCard.dataset.cardId === secondCard.dataset.cardId;

        if (isMatch) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");

            matchedPairs++;

            resetSelection();

            if (matchedPairs === cardImages.length) {
                if (status) {
                    status.textContent = "Výborne! Našiel si všetky dvojice.";
                }
            } else if (status) {
                status.textContent = "Dvojica nájdená.";
            }

            return;
        }

        firstCard.classList.add("wrong");
        secondCard.classList.add("wrong");

        if (status) {
            status.textContent = "Skús inú dvojicu.";
        }

        setTimeout(() => {
            firstCard.classList.remove("flipped", "wrong");
            secondCard.classList.remove("flipped", "wrong");

            resetSelection();

            if (status) {
                status.textContent = "Nájdi dvojice.";
            }
        }, 850);
    }

    function resetSelection() {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }

    if (restartButton) {
        restartButton.addEventListener("click", () => {
            playClick();
            renderBoard();
        });
    }

    renderBoard();
}