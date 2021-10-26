<?php

header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
echo '<response>';

    $food = $_GET['food']; 
    $foodArray = array('tuna', 'beef', 'loaf', 'bacon');

    if (in_array($food, $foodArray)) {
        echo 'We do have '.$food.'!';        # code...
    }
    elseif ($food=='') {
        echo'Enter a food you Punk';
        # code...
    }
    else{
        echo 'Sorry punk we dont sell no '. $food . 'here! ';

    }


echo '</response>';
?>