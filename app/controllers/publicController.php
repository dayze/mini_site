<?php
switch ($action) {
    case "home":
        $navigation = file_get_contents("app/views/nav/nav.part.html");
        $content = Tools::setObContent("app/views/part/home.part.html");
        include("app/views/layout.php");
        break;

    case "spots":
        $navigation = file_get_contents("app/views/nav/nav.part.html");
        $content = Tools::setObContent("app/views/part/spots.part.html");
        include("app/views/layout.php");
        break;

    case "team":
        $navigation = file_get_contents("app/views/nav/nav.part.html");
        $content = Tools::setObContent("app/views/part/team.part.html");
        include("app/views/layout.php");
        break;

    case "contact":
        $navigation = file_get_contents("app/views/nav/nav.part.html");
        $content = Tools::setObContent("app/views/part/contact.part.html");
        include("app/views/layout.php");
        break;

    case "gallerie":
        $navigation = file_get_contents("app/views/nav/nav.part.html");
        $content = Tools::setObContent("app/views/part/gallerie.part.html");
        include("app/views/layout.php");
        break;

    case "about":
        $navigation = file_get_contents("app/views/nav/nav.part.html");
        $content = Tools::setObContent("app/views/part/about.part.html");
        include("app/views/layout.php");
        break;

    default:
        ob_start();
        header("HTTP/1.0 404 Not Found");
        ob_get_contents();
        ob_end_clean();
        $navigation = file_get_contents("app/views/nav/nav.part.html");
        $content = Tools::setObContent("app/views/part/error.part.html");
        include("app/views/layout.php");
        break;
}