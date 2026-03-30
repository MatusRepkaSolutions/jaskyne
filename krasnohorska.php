<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Krásnohorská jaskyňa</title>

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

    <h1 class="cave-title" data-txt="krasnohorskaPageTitle">Krásnohorská jaskyňa</h1>

    <div class="cave-page-content">

        <div class="cave-side-info">
            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="krasnohorskaInfoLengthLabel">Celková dĺžka jaskyne</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoLengthValue">1 556 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="krasnohorskaInfoTempLabel">Teplota vzduchu</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoTempValue">9 °C</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="krasnohorskaInfoDripLabel">Výška kvapľa (najväčší v miernom pásme)</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoDripValue">32,6 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="krasnohorskaInfoDomeLabel">Výška dómov v jaskyni</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoDomeValue">až 45 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="krasnohorskaInfoYearLabel">Sprístupnená od roku</div>
                <div class="cave-info-value" data-txt="krasnohorskaInfoYearValue">2004</div>
            </div>
        </div>

        <div class="cave-main">

            <div class="cave-text-content cave-tab-content active" id="tab-text">
                <p data-txt="krasnohorskaParagraph1">
                    Aktívna riečna jaskyňa vytvorená podzemným tokom Buzgó a jeho prítokmi, ktoré odvodňujú severnú časť najrozsiahlejšej planiny Slovenského krasu. Vznikla na mieste výraznej tektonickej poruchy v gutensteinských dolomitoch, sčasti v svetlosivých steinalmských vápencoch, na severnom úpätí Silickej planiny, v blízkosti obce Krásnohorská Dlhá Lúka.
                </p>

                <p data-txt="krasnohorskaParagraph2">
                    Jej objav bol ďalším významným úspechom skupiny jaskyniarov z Rožňavy a okolia, ktorí vstúpili do jej priestorov v júni 1964 po znížení vody vo vyvieračke Buzgó a rozšírení vstupnej pukliny. Aj keď bola kvôli uľahčeniu prístupu vyrazená umelá štôlňa, k plánovanému sprístupneniu jaskyne došlo až v roku 2004 turistickou formou. V porovnaní s ostatnými sprístupnenými jaskyňami tu návštevníci značnú časť prehliadkovej trasy s dĺžkou 450 m prekonávajú pri svetle čeloviek nad podzemným tokom po drevených chodníkoch, rebríkoch a lanovom traverze.
                </p>

                <p data-txt="krasnohorskaParagraph3">
                    Po úvodnom úseku, bez výraznejšej výzdoby, tvorenom dlhou puklinovou chodbou s názvom Veľký kaňon, nasleduje sústava 8 mohutných dómov. Tieto priestory majú hodnotnú výzdobu, jedinečné sú rozmanité excentrické heliktity a koralovité útvary s mangánovým povlakom. Dominantou jaskyne je Sieň obrov s 34 m vysokým Kvapľom rožňavských jaskyniarov, ktorý zaraďujeme medzi najväčšie sintrové útvary v Európe.
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