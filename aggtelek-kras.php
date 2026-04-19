<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <title>Jaskyne</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/map2.css">

    <script src="js/main.js" defer></script>
    <script src="js/kras-mapa.js" defer></script>
</head>
<body data-translation-page="mapa" style="background: url('img/agg-mapa/background.png');">


    <!-- ######################## Upper controls ################## -->

    <div class="global-control-buttons">
        <a class="home-button" href="mapa.php">
            <img class="home-button-img" src="img/home-button.svg" alt="Domov">
        </a>
        <a href="slovensky-kras.php" class="global-nav-btn" data-txt="btnAggtelekKarst">
            Jaskyne Slovenského krasu
        </a>
    </div>

    <?php include 'language-buttons.php'; ?>

    <!-- ########################################################## -->

    <div class="map-title map-animate-title" data-txt="mapTitle2"> 
        Jaskyne Aggteleckého krasu
    </div>

    <a href="bradla.php" class="map2-button pos7" style="--i:0;" data-cave="baradla">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="baradla">Jaskyňa Baradla</div>
    </a>

    <a href="imreho.php" class="map2-button pos8" style="--i:1;" data-cave="imreho">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="imreho">Jaskyňa Imreho Vassa</div>
    </a>

    <a href="beke.php" class="map2-button pos9" style="--i:2;" data-cave="beke">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="beke">Jaskyňa Béke</div>
    </a>

    <a href="kossuthova.php" class="map2-button pos10" style="--i:3;" data-cave="kossuthova">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="kossuthova">Kossuthova jaskyňa</div>
    </a>

    <a href="meteor.php" class="map2-button pos11" style="--i:4;" data-cave="meteor">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="meteor">Jaskyňa Meteor</div>
    </a>

    <a href="rakocziho.php" class="map2-button pos12" style="--i:5;" data-cave="rakocziho">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="rakocziho">Rákócziho jaskyňa</div>
    </a>

    <div class="map2-bottom-text" data-txt="VyberSiJaskynu">Vyber si jaskyňu</div>

</body>
</html>