<?php
include('connect.php');
include('functions.php');

if(isset ($_GET['id'])) { // if we need to return one piece get it

    $targetID = $_GET["id"];
    $result = getSingleFav($pdo, $targetID);

    return $result;
} else {

    $allFav = getAllFav($pdo);// else we return everything we need

    return $allFav;
}