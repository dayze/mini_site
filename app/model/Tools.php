<?php
class Tools
{

    public static function setObContent($content){
        ob_start();
        include($content);
        $c = ob_get_contents();
        ob_end_clean();
        return $c;
    }

}