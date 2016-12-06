<?php
include("app/config/config_app.php");
$nav = file_get_contents("app/views/nav/nav.part.html");
$footer = file_get_contents("app/views/footer/footer.part.html");
$action = isset($_GET['a']) ? $_GET["a"] : "home";
include("app/controllers/publicController.php");


