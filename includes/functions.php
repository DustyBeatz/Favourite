<?php
   // this brings the connect file into functions.php allowing us to access the table
    include("connect.php"); //like a JS import statement

    $query = "SELECT * FROM fav_items";

    $runQuery = $pdo->query($query); 

    $result = array();

    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;

    }

    var_dump(json_encode($result)); //this shows that we have the data needed