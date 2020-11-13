<?php
   // this brings the connect file into functions.php allowing us to access the table
    include("connect.php"); //like a JS import statement

    $result = array();
    function getAllFav($conn) { //This selects everything from the fav_items table
        $query = "SELECT * FROM fav_items";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] =$row;
        }

        echo(json_encode($result));
    }


    function getSingleFav($conn, $id) { //this function selects a single fav thing from the ID
        $query = "SELECT * FROM fav_items WHERE id=" . $id . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] =$row;
        }

        echo (json_encode($result));
    }
