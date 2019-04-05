<?php
session_start();
include 'auth.php';
if ($_POST["login"] && $_POST["passwd"])
{
	$_SESSION["login"] = $_POST["login"];
    $_SESSION["passwd"] = $_POST["passwd"];
    if (auth($_SESSION['login'], $_SESSION['passwd']) == TRUE)
    {    
        echo "OK\n";
        header ("Location: index.php");
    }
	else
		echo "SESSION ERROR\n";
}
else
{
    echo "ERROR\n";
    exit();
}
?>