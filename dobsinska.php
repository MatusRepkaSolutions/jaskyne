<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dobšinská ľadová jaskyňa</title>

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

    <h1 class="cave-title" data-txt="dobsinskaPageTitle">Dobšinská ľadová jaskyňa</h1>

    <div class="cave-page-content">

        <div class="cave-side-info">
            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="dobsinskaInfoLengthLabel">Celková dĺžka jaskyne</div>
                <div class="cave-info-value" data-txt="dobsinskaInfoLengthValue">1 483 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="dobsinskaInfoTempLabel">Teplota vo Veľkej sieni</div>
                <div class="cave-info-value" data-txt="dobsinskaInfoTempValue">−3,9 až +0,2 °C</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="dobsinskaInfoIceVolumeLabel">Objem ľadu v jaskyni</div>
                <div class="cave-info-value" data-txt="dobsinskaInfoIceVolumeValue">110 100 m³</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="dobsinskaInfoIceThicknessLabel">Max. hrúbka ľadu</div>
                <div class="cave-info-value" data-txt="dobsinskaInfoIceThicknessValue">26,5 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="dobsinskaInfoElectricLabel">Prvá elektricky osvetlená jaskyňa v Európe</div>
                <div class="cave-info-value" data-txt="dobsinskaInfoElectricValue">od roku 1887</div>
            </div>
        </div>

        <div class="cave-main">

            <div class="cave-text-content cave-tab-content active" id="tab-text">
                <p data-txt="dobsinskaParagraph1">
                    Objemom ľadu viac ako 110 000 m³ jedna z najvýznamnejších ľadových jaskýň sveta. Tvorí súčasť rozsiahlejšieho systému Stratenskej jaskyne. Vytvorená bola v strednotriasových steinalmských a wettersteinských vápencoch podzemnými tokmi rieky Hnilec v juhozápadnej časti Národného parku Slovenský raj.
                </p>

                <p data-txt="dobsinskaParagraph2">
                    Jaskyňu objavila v roku 1870 skupina z Dobšinej pod vedením Eugena Ruffinyho. Už o rok neskôr sa ju podarilo sprístupniť a koncom 19. storočia bola jednou z prvých elektricky osvetlených jaskýň na svete. V tomto období bola častým cieľom návštevníkov, vrátane viacerých významných svetových osobností a organizovali sa v nej letné korčuľovania. Súčasťou svetového prírodného dedičstva sa stala v roku 2000 po rozšírení pôvodnej nominácie. Z celkovej dĺžky jaskyne 1 491 m tvorí dĺžka sprístupnenej časti 475 m.
                </p>

                <p data-txt="dobsinskaParagraph3">
                    Mohutná dutina vzniknutá preborením stropov jaskyne bola v období štvrtohôr zaľadnená zamŕzaním presakujúcich zrážkových vôd. Vznikla tak rozsiahla výplň vo forme podlahového ľadu, ľadopádov a ľadových stalagmitov. Významné zimovisko vzácnych druhov netopierov, zistila sa tu prítomnosť až 12 druhov.
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