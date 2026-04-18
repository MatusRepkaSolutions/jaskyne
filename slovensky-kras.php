<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <title>Jaskyne</title>

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/map2.css">

    <script src="js/main.js" defer></script>
</head>
<body>


    <!-- ######################## Upper controls ################## -->

    <div class="global-control-buttons">
        <a class="home-button" href="mapa.php">
            <img class="home-button-img" src="img/home-button.svg" alt="Domov">
        </a>
        <a href="aggtelek-kras.php" class="global-nav-btn" data-txt="btnAggtelekKarst">
            Jaskyne Aggteleckého krasu
        </a>
    </div>

    <?php include 'language-buttons.php'; ?>

    <!-- ########################################################## -->

    <div class="map-title map-animate-title" data-txt="mapTitle">
        Jaskyne Slovenského krasu
    </div>

    <a href="ochtinska.php" class="map2-button pos1" style="--i:0;">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="ochotnicka">Ochtinská aragonitová jaskyňa</div>
    </a>

    <a href="domnica.php" class="map2-button pos2" style="--i:2;">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="domica">Domica</div>
    </a>

    <a href="gombasecka.php" class="map2-button pos3" style="--i:1;">
        <div class="map2-button-text special" data-txt="gombasecka">Gombasecká jaskyňa</div>
        <div class="map2-button-marker"></div>
    </a>

    <a href="jasovska.php" class="map2-button pos4" style="--i:5;">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="jasovska">Jasovská jaskyňa</div>
    </a>

    <a href="krasnohorska.php" class="map2-button pos5" style="--i:4;">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="krasnohorska">Krásnohorská jaskyňa</div>
    </a>

    <a href="silicka.php" class="map2-button pos6" style="--i:3;">
        <div class="map2-button-marker"></div>
        <div class="map2-button-text" data-txt="silicka">Silická ľadnica</div>
    </a>

    <div class="map2-bottom-text" data-txt="KlikniNaMapu">Klikni na mapu</div>

</body>
</html>