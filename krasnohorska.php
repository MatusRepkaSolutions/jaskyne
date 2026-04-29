<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>krasnohorska</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/cave-page.css">

    <script src="js/main.js" defer></script>
    <script src="js/cave-page.js" defer></script>
</head>
<body data-translation-page="krasnohorska">

<div class="cave-page" style="background: url('img/cavebg/krasnohorska.png');">

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

    <div class="map-lang-switches">
        <a href="#" class="map-lang-btn" data-lang-switch="svk">
            <img src="img/index/slovakia.jpg" alt="Slovak">
        </a>

        <a href="#" class="map-lang-btn" data-lang-switch="hun">
            <img src="img/index/hungary.png" alt="Hungarian">
        </a>

        <a href="#" class="map-lang-btn" data-lang-switch="eng">
            <img src="img/index/england.png" alt="English">
        </a>
    </div>

    <div class="cave-page-overlay"></div>

    <h1 class="cave-title" data-txt="krasnohorskaPageTitle">Ochtinská aragonitová jaskyňa</h1>

    <div class="cave-page-content">

    <div class="cave-tab-panel active" id="tab-text">
        <div class="cave-side-info">
            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="InfoLengthLabel">Celková dĺžka jaskyne</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoLengthValue">300 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="InfoTempLabel">Teplota vzduchu</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoTempValue">7,2 – 7,8 °C</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="krasnohorskaInfoStalagmiteHeightLabel">Hĺbka (vertikálne rozpätie)</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoStalagmiteHeightValue">30 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="krasnohorskaInfoDomeHeightLabel">Vek najstaršieho aragonitu</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoDomeHeightValue">121 000 – 138 000 rokov</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="krasnohorskaInfoOpenSinceLabel">Počet sprístupnených aragonitových jaskýň na svete</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoOpenSinceValue">16</div>
            </div>
        </div>

        <div class="cave-main custom-scroll" id="scroll-1">
            <div class="cave-text-content">
                <p data-txt="krasnohorskaParagraph1">
                    Najvýznamnejšia z jaskýň Revúckej vrchoviny zaujme mimoriadne rozmanitou a bohatou výzdobou
                    tvorenou aragonitom. Nachádza sa v severnom svahu vrchu Hrádok medzi Štítnikom a Jelšavou.
                    Jaskyňa vznikla v šošovke kryštalických vápencov a ankeritov z obdobia prvohôr koróznou činnosťou
                    podzemnej vody.
                </p>

                <p data-txt="krasnohorskaParagraph2">
                    Objavili ju koncom roka 1954 náhodne baníci počas razenia štôlne pri geologickom prieskume ložísk
                    železnej rudy v lokalite Horný Hrádok. Pre verejnosť bola otvorená v roku 1972. Prehliadková trasa
                    s dĺžkou 230 m je prístupná umelo vyrazenou štôlňou.
                </p>

                <p data-txt="krasnohorskaParagraph3">
                    Výzdoba pozostáva z troch generácií aragonitu, najstaršie obličkovité útvary majú vek približne 140-tisíc
                    rokov, najpočetnejšia a vizuálne najatraktívnejšia je druhá generácia datovaná na 14-tisíc rokov,
                    najmladšia sa stále tvorí. Snehobiele aragonitové trsy a kríčky vynikajú na modrosivom mramorovom
                    podklade. Špecifická výzdoba je pravdepodobne výsledkom jedinečnými podmienok v uzavretých
                    podzemných priestoroch jaskyne.
                </p>


            </div>
        </div>
    </div>

    <div 
        class="cave-tab-panel cave-gallery-panel" 
        id="tab-gallery"
        data-gallery-path="img/gallery/krasnohorska"
        data-gallery-count="10"
    >
        <div class="gallery-shell">

            <div class="gallery-stage">

                <div class="gallery-side gallery-side-left">
                    <img class="gallery-side-img" src="">
                </div>

                <div class="gallery-center">
                    <img class="gallery-main-img" src="">

                    <div class="gallery-captions">
                        <div class="gallery-caption-item" data-index="0">
                            <div class="gallery-caption-text" data-txt="cap1">Caption 1</div>
                            <div class="gallery-caption-author" data-txt="aut1">Author 1</div>
                        </div>

                        <div class="gallery-caption-item" data-index="1">
                            <div class="gallery-caption-text" data-txt="cap2">Caption 2</div>
                            <div class="gallery-caption-author" data-txt="aut2">Author 2</div>
                        </div>

                        <div class="gallery-caption-item" data-index="2">
                            <div class="gallery-caption-text" data-txt="cap3">Caption 3</div>
                            <div class="gallery-caption-author" data-txt="aut3">Author 3</div>
                        </div>

                        <div class="gallery-caption-item" data-index="3">
                            <div class="gallery-caption-text" data-txt="cap4">Caption 4</div>
                            <div class="gallery-caption-author" data-txt="aut4">Author 4</div>
                        </div>

                        <div class="gallery-caption-item" data-index="4">
                            <div class="gallery-caption-text" data-txt="cap5">Caption 5</div>
                            <div class="gallery-caption-author" data-txt="aut5">Author 5</div>
                        </div>

                        <div class="gallery-caption-item" data-index="5">
                            <div class="gallery-caption-text" data-txt="cap6">Caption 6</div>
                            <div class="gallery-caption-author" data-txt="aut6">Author 6</div>
                        </div>

                        <div class="gallery-caption-item" data-index="6">
                            <div class="gallery-caption-text" data-txt="cap7">Caption 7</div>
                            <div class="gallery-caption-author" data-txt="aut7">Author 7</div>
                        </div>

                        <div class="gallery-caption-item" data-index="7">
                            <div class="gallery-caption-text" data-txt="cap8">Caption 8</div>
                            <div class="gallery-caption-author" data-txt="aut8">Author 8</div>
                        </div>

                        <div class="gallery-caption-item" data-index="8">
                            <div class="gallery-caption-text" data-txt="cap9">Caption 9</div>
                            <div class="gallery-caption-author" data-txt="aut9">Author 9</div>
                        </div>

                        <div class="gallery-caption-item" data-index="9">
                            <div class="gallery-caption-text" data-txt="cap10">Caption 10</div>
                            <div class="gallery-caption-author" data-txt="aut10">Author 10</div>
                        </div>
                    </div>

                </div>

                <div class="gallery-side gallery-side-right">
                    <img class="gallery-side-img" src="">
                </div>

            </div>

        </div>
    </div>

    <div class="cave-tab-panel cave-video-panel" id="tab-video">
        <div class="cave-placeholder" data-txt="videoPlaceholder">
            Video bude doplnené.
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
</body>
</html>