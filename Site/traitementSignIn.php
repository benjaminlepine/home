<?php
$postdata = http_build_query(
    array(
        'mail' => $_POST['mail'],
        'pass' => $_POST['pass'],
        'first_name' => $_POST['first_name'],
        'last_name' => $_POST['last_name']
    )
);

$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'http://home.keysim.fr/API2/home_users',
        'content' => $postdata
    )
);

$context  = stream_context_create($opts);

$result = file_get_contents('http://home.keysim.fr/API2/home_users', false, $context);

session_start();
$_SESSION['mail'] = $_POST['mail']; 
header('Location: https://bootstrap-cardio-one-virgil-c.c9users.io/Home3D/Accueil/accueil.php');
?>