<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jasovská jaskyňa</title>

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

    <h1 class="cave-title" data-txt="jasovskaPageTitle">Jasovská jaskyňa</h1>

    <div class="cave-page-content">

        <div class="cave-side-info">
            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="jasovskaInfoLengthLabel">Celková dĺžka jaskyne</div>
                <div class="cave-info-value" data-txt="jasovskaInfoLengthValue">2 811 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="jasovskaInfoTempLabel">Teplota vzduchu</div>
                <div class="cave-info-value" data-txt="jasovskaInfoTempValue">8,8 – 9,4 °C</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="jasovskaInfoDepthLabel">Hĺbka (vertikálne rozpätie)</div>
                <div class="cave-info-value" data-txt="jasovskaInfoDepthValue">55 m</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="jasovskaInfoInscriptionLabel">Najstarší nápis v jaskyniach SR</div>
                <div class="cave-info-value" data-txt="jasovskaInfoInscriptionValue">z roku 1452</div>
            </div>

            <div class="cave-info-item">
                <div class="cave-info-label" data-txt="jasovskaInfoBatsLabel">Počet druhov netopierov</div>
                <div class="cave-info-value" data-txt="jasovskaInfoBatsValue">19</div>
            </div>
        </div>

        <div class="cave-main">

            <div class="cave-text-content cave-tab-content active" id="tab-text">
                <p data-txt="jasovskaParagraph1">
                    Rozsiahla viacúrovňová jaskyňa s bohatou kvapľovou výzdobou vytvorená v strednotriasových
                    gutensteinských dolomitoch a svetlých steinalmských vápencoch a dolomitoch. Nachádza sa na okraji
                    obce Jasov v severovýchodnej časti Národného parku Slovenský kras v masíve Jasovskej skaly.
                </p>

                <p data-txt="jasovskaParagraph2">
                    Početné archeologické nálezy dokazujú jej praveké osídlenie, v jaskyni sa našli okrem pozostatkov
                    bukovohorskej kultúry aj predmety z halštatskej a rímskej doby. V stredoveku a novoveku počas
                    období vojen a povstaní viackrát poslúžila pre okolitých obyvateľov ako úkryt. O dlhodobej prítomnosti
                    človeka svedčí množstvo historických nápisov a kresieb, najstarší datovaný nápis pochádza z roku
                    1452. Prvýkrát sprístupnená v roku 1846 jasovskými premonštrátmi, opätovné sprístupnenie,
                    podrobnejší výskum a vybudovanie elektrického osvetlenia jaskyne bolo realizované v medzivojnovom
                    období. Z celkovo známej dĺžky jaskyne 2 811 m je v súčasnosti sprístupnených 550 m.
                </p>

                <p data-txt="jasovskaParagraph3">
                    Významné zimovisko netopierov, zistená bola prítomnosť 19 druhov. Nájdené tu boli kostrové
                    pozostatky jaskynného medveďa a jaskynnej hyeny. Okrem turistického využitia je využívaná aj pri
                    speleoterapii.
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