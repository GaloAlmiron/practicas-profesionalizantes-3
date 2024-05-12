<?php

  include('database.php');

  $query = "SELECT * from users";
  $result = mysqli_query($connection, $query);
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }

  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'id' => $row['id'],
      'username' => $row['username'],
      'saldo' => $row['saldo']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>
