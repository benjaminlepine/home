{"filter":false,"title":"traitementSignIn.php","tooltip":"/Site/traitementSignIn.php","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":25,"column":2},"action":"insert","lines":["<?php","$postdata = http_build_query(","    array(","        'mail' => $_POST['mail'],","        'pass' => $_POST['pass'],","        'first_name' => $_POST['first_name'],","        'last_name' => $_POST['last_name']","    )",");","","$opts = array('http' =>","    array(","        'method'  => 'POST',","        'header'  => 'http://home.keysim.fr/API2/home_users',","        'content' => $postdata","    )",");","","$context  = stream_context_create($opts);","","$result = file_get_contents('http://home.keysim.fr/API2/home_users', false, $context);","","session_start();","$_SESSION['mail'] = $_POST['mail']; ","header('Location: https://bootstrap-cardio-one-virgil-c.c9users.io/Home3D/Accueil/accueil.php');","?>"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":2},"end":{"row":25,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1481661736745,"hash":"5a102f888f4f96954e736535c3d0ccfca1d336e6"}