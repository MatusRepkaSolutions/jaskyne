<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <title>Jaskyne</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/map.css">

    <script src="js/main.js" defer></script>
</head>
<body>

<div class="map-page">

    <!-- ######################## Upper controls ################## -->

    <?php include 'language-buttons.php'; ?>

    <!-- ########################################################## -->

    <div class="map-title map-animate-title" data-txt="mapTitle">
        Jaskyne Slovenského a Aggteleckého krasu
    </div>

    <div class="map-content">

        <div class="map-left">
            <img class="map-image map-animate-map" src="img/mapa/mapa.svg" alt="Mapa krasu">

            <div class="map-text-svk map-animate-label" data-txt="slovensko">
                Slovensko
            </div>

            <div class="map-text-hun map-animate-label" data-txt="madarsko">
                Maďarsko
            </div>
        </div>

        <div class="map-right">
            <span class="map-paragraph map-animate-text" data-txt="map1">
                Slovenský kras je jedinečným príkladom dobre vyvinutého planinového krasu, ktorý v regióne strednej Európe nemá obdoby.
            </span>

            <span class="map-paragraph map-animate-text" data-txt="map2">
                Ich mimoriadna rozmanitosť, veľká koncentrácia javov na malom priestore a unikátnosť je ojedinelá aj v celosvetovom meradle.
            </span>

            <span class="map-paragraph map-animate-text" data-txt="map3">
                Medzinárodné ocenenie jaskýň Slovenského a Aggteleckého krasu nás preto zaväzuje zachovávať, prezentovať a odovzdávať tieto jedinečné prírodné hodnoty ďalším generáciám.
            </span>
        </div>

    </div>

    <div class="map-bottom-buttons">
        <a href="slovensky-kras.php" class="map-nav-btn" data-txt="btnSlovakKarst">
            Jaskyne Slovenského krasu
        </a>

        <a href="aggtelek-kras.php" class="map-nav-btn" data-txt="btnAggtelekKarst">
            Jaskyne Aggteleckého krasu
        </a>
    </div>

</div>

</body>
</html>