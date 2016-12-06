<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8"/>
    <title>NormandieKite</title>
    <meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1"/>
    <link rel="stylesheet" type="text/css" href="vendor/public/css/style.css"/>
    <script src="vendor/public/js/lib/warlock.js"></script>
</head>
<body>
<header>
    <div id="nav">
        <nav class="wrapper">
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="label-toggle"></label>
            <?= $nav ?>

        </nav>
    </div>
</header>
<?= $content ?>

<?= $footer ?>

</body>
</html>