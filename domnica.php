<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Domica</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/cave-page.css">

    <script src="js/main.js" defer></script>
    <script src="js/cave-page.js" defer></script>
</head>
<body>

<div class="cave-page">

    <!-- ######################## Upper controls ################## -->

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

    <!-- ########################################################## -->

    <div class="cave-page-overlay"></div>

    <h1 class="cave-title" data-txt="caveTitle">Domica</h1>

    <div class="cave-page-content">

        <div class="cave-side-info">
            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="infoLengthLabel">Celková dĺžka jaskyne</div>
                <div class="cave-info-value" data-txt="infoLengthValue">5 368 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="infoTempLabel">Teplota vzduchu</div>
                <div class="cave-info-value" data-txt="infoTempValue">10,2 – 11,4 °C</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="infoBoatLabel">Dĺžka plavby po riečke Styx</div>
                <div class="cave-info-value" data-txt="infoBoatValue">150 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="infoSettlementLabel">Osídlenie pravekým človekom</div>
                <div class="cave-info-value" data-txt="infoSettlementValue">pred 5 000 – 6 000 rokmi</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="infoBatsLabel">Počet druhov netopierov</div>
                <div class="cave-info-value" data-txt="infoBatsValue">16</div>
            </div>
        </div>

        <div class="cave-main">

            <div class="cave-text-content cave-tab-content active" id="tab-text">
                <p data-txt="paragraph1">
                    Jeden z najrozsiahlejších a najvýznamnejších jaskynných systémov Slovenského krasu sa nachádza
                    v južnej časti Silickej planiny, v blízkosti štátnej hranice s Maďarskom. Celková dĺžka Domice spolu
                    s jaskyňou Baradla v Aggteleckom krase presahuje 30 km. Vytvorená bola v svetlých wettersteinských
                    vápencoch eróznou činnosťou podzemného toku Styx a jeho prítokov.
                </p>

                <p data-txt="paragraph2">
                    Domicu objavil Ján Majko v roku 1926, verejnosti je sprístupnená od roku 1932. Mimoriadnu kultúrnu
                    hodnotu tejto jaskyne predstavujú početné archeologické nálezy a nástenné maľby z obdobia praveku,
                    ktoré ostali po zavalení vstupného vchodu zakonzervované až do objavenia jaskyne. Ide o najbohatšie
                    nálezisko predmetov z obdobia bukovohorskej kultúry na území Slovenska.
                </p>

                <p data-txt="paragraph3">
                    Charakteristická je bohatou výzdobou s jedinečnými sintrovými kaskádami, štítmi a bubnami, veľkou
                    početnosťou jazierok druhov živočíchov, zároveň je dôležitým zimoviskom 16 druhov netopierov.
                    Ako jediná z jaskýň svetového dedičstva je zároveň Ramsarskou lokalitou – podzemnou mokraďou
                    medzinárodného významu. Pre návštevníkov je raritou možnosť plavby v člnoch podzemným tokom
                    Styx.
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