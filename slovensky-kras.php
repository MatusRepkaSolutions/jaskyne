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

<div class="page">

    <!-- ######################## Upper controls ################## -->

    <div class="global-control-buttons">
        <a class="home-button" href="mapa.php">
            <img src="img/home-button.svg">
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

    <div class="kras-mapa">
        <img src="img/kras-mapa/mapa.png" class="kras-mapa-img">
    </div>



</div>

</body>
</html>