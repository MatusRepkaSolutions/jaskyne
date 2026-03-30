<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gombasecká jaskyňa</title>

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

    <h1 class="cave-title" data-txt="gombaseckaPageTitle">Gombasecká jaskyňa</h1>

    <div class="cave-page-content">

        <div class="cave-side-info">
            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="gombaseckaInfoLengthLabel">Celková dĺžka jaskyne</div>
                <div class="cave-info-value" data-txt="gombaseckaInfoLengthValue">1 525 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="gombaseckaInfoTempLabel">Teplota vzduchu</div>
                <div class="cave-info-value" data-txt="gombaseckaInfoTempValue">9 – 9,4 °C</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="gombaseckaInfoStrawLabel">Dĺžka sintrových brčiek</div>
                <div class="cave-info-value" data-txt="gombaseckaInfoStrawValue">až 3 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="gombaseckaInfoYearLabel">Sprístupnená od roku</div>
                <div class="cave-info-value" data-txt="gombaseckaInfoYearValue">1955</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="gombaseckaInfoDepthLabel">Hĺbka (vertikálne rozpätie)</div>
                <div class="cave-info-value" data-txt="gombaseckaInfoDepthValue">15 m</div>
            </div>
        </div>

        <div class="cave-main">

            <div class="cave-text-content cave-tab-content active" id="tab-text">
                <p data-txt="gombaseckaParagraph1">
                    Nachádza sa v západnej časti Silickej planiny približne 2 km južne od obce Slavec. Vznikla činnosťou
                    Čierneho potoka v druhohorných vápencoch Silickej planiny. Spolu s blízkou Silickou ľadnicou je
                    súčasťou rozsiahleho Silicko-gombaseckého jaskynného systému, ktorého väčšia časť je zatiaľ
                    neznáma.
                </p>

                <p data-txt="gombaseckaParagraph2">
                    Gombasecká jaskyňa bola prvým významným objavom skupiny dobrovoľných jaskyniarov z Rožňavy.
                    Objavitelia pod vedením Viliama Rozložníka, Ladislava Herényiho st. a Štefana Rodu prehĺbili riečisko
                    Čiernej vyvieračky a po znížení hladiny vody sa 21. novembra 1951 dostali do podzemných priestorov
                    s bohatou výzdobou. Pre návštevníkov je sprístupnená od mája 1955. V lete 2016 došlo k objavu
                    nových priestorov, z aktuálnej celkovej dĺžky 3 027 m je sprístupnených 285 m.
                </p>

                <p data-txt="gombaseckaParagraph3">
                    Vyniká mimoriadnou farebnosťou výzdoby, jedinečné sú tenké biele sintrové brčká, ktoré dosahujú
                    dĺžku až 3 m pri hrúbke len 2–3 mm. Unikátom je prítomnosť jaskynného živočícha, mnohonôžky rodu
                    Typhloiulus sp., ktorá je najväčším pravým jaskynným živočíchom žijúcim v slovenských jaskyniach.
                    Vďaka priaznivým účinkom jaskynnej klímy bola od roku 1968 ako prvá jaskyňa na území Slovenska
                    využívaná pri liečbe chorôb dýchacích ciest, pri jaskyni fungovalo aj speleolaboratórium.
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