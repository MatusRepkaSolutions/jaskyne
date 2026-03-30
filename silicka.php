<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silická ľadnica</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/cave-page.css">

    <script src="js/main.js" defer></script>
    <script src="js/cave-page.js" defer></script>
</head>
<body>

<div class="cave-page">

    <div class="global-control-buttons">
        <a class="home-button" href="mapa.php">
            <img class="home-button-img" src="img/home-button.svg" alt="Home">
        </a>

        <a href="slovensky-kras.php" class="global-nav-btn" data-txt="btnSlovakKarst">
            Jaskyne Slovenského krasu
        </a>

        <a href="aggtelek-kras.php" class="global-nav-btn" data-txt="btnAggtelekKarst">
            Jaskyne Aggteleckého krasu
        </a>
    </div>

    <?php include 'language-buttons.php'; ?>

    <div class="cave-page-overlay"></div>

    <h1 class="cave-title" data-txt="silickaPageTitle">Silická ľadnica</h1>

    <div class="cave-page-content">

        <div class="cave-side-info">
            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="silickaInfoLengthLabel">Celková dĺžka jaskyne</div>
                <div class="cave-info-value" data-txt="silickaInfoLengthValue">1 100 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="silickaInfoDepthLabel">Hĺbka priepasti</div>
                <div class="cave-info-value" data-txt="silickaInfoDepthValue">110 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="silickaInfoAltitudeLabel">Najnižšie položená ľadová jaskyňa na svete</div>
                <div class="cave-info-value" data-txt="silickaInfoAltitudeValue">503 m n. m.</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="silickaInfoDifferenceLabel">Teplotný rozdiel oproti okoliu v lete</div>
                <div class="cave-info-value" data-txt="silickaInfoDifferenceValue">viac ako 30 °C</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="silickaInfoCollapseLabel">Vznik prepadnutím stropu dómu</div>
                <div class="cave-info-value" data-txt="silickaInfoCollapseValue">pred cca 2 000 rokmi</div>
            </div>
        </div>

        <div class="cave-main">

            <div class="cave-text-content cave-tab-content active" id="tab-text">
                <p data-txt="silickaParagraph1">
                    Najnižšie položená jaskyňa v miernom klimatickom pásme sa nachádza v centrálnej časti Silickej
                    planiny, približne 1 km západne od obce Silica. Tvorí súčasť rozsiahleho Silicko-gombaseckého
                    jaskynného systému, ktorého väčšia časť je doposiaľ neznáma.
                </p>

                <p data-txt="silickaParagraph2">
                    Mohutná vstupná časť, ktorá vznikla prepadnutím stropu je známa oddávna, jej prvé opisy a náčrty
                    pochádzajú z 18. storočia. Ľahko prístupný zaľadnený priestor lákal návštevníkov a slúžil ako
                    prirodzená zásobáreň ľadu. Spodná nezaľadnená časť jaskyne bola objavená po prekopaní závalu na
                    dne Jánom Majkom v roku 1931. Pravá sieň bohatá na archeologické nálezy, Archeologický dóm je
                    významným náleziskom doby kamennej a bronzovej, osídlenie pochádza z doby pred zaľadnením.
                    Niektoré z nájdených predmetov sú prezentované aj v tejto expozícii. Prieskum ďalších priestorov
                    realizovali speleopotápači náročným prekonávaním sifónov podzemného toku.
                </p>

                <p data-txt="silickaParagraph3">
                    Následkom zaľadnenia je inverzia fauny a flóry a s ňou súvisiaca prítomnosť chladnomilných druhov.
                    Podzemné priestory Silickej ľadnice nie sú prístupné pre verejnosť, do vstupnej časti s ľadovou
                    výzdobou je možné nahliadnuť z vyhliadkovej terasy.
                </p>
            </div>

            <div class="cave-gallery-content cave-tab-content" id="tab-gallery">
                <div class="cave-placeholder" data-txt="galleryPlaceholder">
                    Galéria bude doplnená.
                </div>
            </div>

            <div class="cave-video-content cave-tab-content" id="tab-video">
                <div class="cave-placeholder" data-txt="videoPlaceholder">
                    Video bude doplnené.
                </div>
            </div>
        </div>
    </div>

    <div class="cave-button-wrappers">
        <button class="cave-tab-btn active" type="button" data-tab-target="text" data-txt="tabText">
            Text
        </button>
        <button class="cave-tab-btn" type="button" data-tab-target="gallery" data-txt="tabGallery">
            Galéria
        </button>
        <button class="cave-tab-btn" type="button" data-tab-target="video" data-txt="tabVideo">
            Video
        </button>
    </div>
</div>

</body>
</html>