<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ochtinská aragonitová jaskyňa</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/cave-page.css">

    <script src="js/main.js" defer></script>
    <script src="js/cave-page.js" defer></script>
</head>
<body>

<div class="cave-page" style="background: url('img/cavebg/ochtinska.png');">

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

    <h1 class="cave-title" data-txt="ochtinskaPageTitle">Ochtinská aragonitová jaskyňa</h1>

    <div class="cave-page-content">

        <div class="cave-side-info">
            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="ochtinskaInfoLengthLabel">Celková dĺžka jaskyne</div>
                <div class="cave-info-value" data-txt="ochtinskaInfoLengthValue">300 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="ochtinskaInfoTempLabel">Teplota vzduchu</div>
                <div class="cave-info-value" data-txt="ochtinskaInfoTempValue">7,2 – 7,8 °C</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="ochtinskaInfoDepthLabel">Hĺbka (vertikálne rozpätie)</div>
                <div class="cave-info-value" data-txt="ochtinskaInfoDepthValue">30 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="ochtinskaInfoAgeLabel">Vek najstaršieho aragonitu</div>
                <div class="cave-info-value" data-txt="ochtinskaInfoAgeValue">121 000 – 138 000 rokov</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="ochtinskaInfoCountLabel">Počet sprístupnených aragonitových jaskýň na svete</div>
                <div class="cave-info-value" data-txt="ochtinskaInfoCountValue">16</div>
            </div>
        </div>

        <div class="cave-main custom-scroll" id="scroll-1">

            <div class="cave-text-content cave-tab-content active" id="tab-text">
                <p data-txt="ochtinskaParagraph1">
                    Najvýznamnejšia z jaskýň Revúckej vrchoviny zaujme mimoriadne rozmanitou a bohatou výzdobou
                    tvorenou aragonitom. Nachádza sa v severnom svahu vrchu Hrádok medzi Štítnikom a Jelšavou.
                    Jaskyňa vznikla v šošovke kryštalických vápencov a ankeritov z obdobia prvohôr koróznou činnosťou
                    podzemnej vody.
                </p>

                <p data-txt="ochtinskaParagraph2">
                    Objavili ju koncom roka 1954 náhodne baníci počas razenia štôlne pri geologickom prieskume ložísk
                    železnej rudy v lokalite Horný Hrádok. Pre verejnosť bola otvorená v roku 1972. Prehliadková trasa
                    s dĺžkou 230 m je prístupná umelo vyrazenou štôlňou.
                </p>

                <p data-txt="ochtinskaParagraph3">
                    Výzdoba pozostáva z troch generácií aragonitu, najstaršie obličkovité útvary majú vek približne 140-tisíc
                    rokov, najpočetnejšia a vizuálne najatraktívnejšia je druhá generácia datovaná na 14-tisíc rokov,
                    najmladšia sa stále tvorí. Snehobiele aragonitové trsy a kríčky vynikajú na modrosivom mramorovom
                    podklade. Špecifická výzdoba je pravdepodobne výsledkom jedinečnými podmienok v uzavretých
                    podzemných priestoroch jaskyne.
                </p>
            </div>

            <div 
                class="cave-gallery-content cave-tab-content" 
                id="tab-gallery"
                data-gallery-path="img/gallery/ochtinska"
                data-gallery-count="10"
            >
                <div class="gallery-shell">
                    <button class="gallery-nav gallery-prev" type="button" aria-label="Predošlá fotografia">
                        &#10094;
                    </button>

                    <div class="gallery-stage">
                        <div class="gallery-side gallery-side-left">
                            <img class="gallery-side-img" src="" alt="">
                        </div>

                        <div class="gallery-center">
                            <img class="gallery-main-img" src="" alt="">
                            <div class="gallery-caption">
                                <div class="gallery-caption-text">Popisok fotografie</div>
                                <div class="gallery-caption-author">Foto</div>
                            </div>
                        </div>

                        <div class="gallery-side gallery-side-right">
                            <img class="gallery-side-img" src="" alt="">
                        </div>
                    </div>

                    <button class="gallery-nav gallery-next" type="button" aria-label="Ďalšia fotografia">
                        &#10095;
                    </button>
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