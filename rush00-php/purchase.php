<?php
session_start();
if (!$_POST["submit"] === "PURCHASE" || !($_SESSION["loggued_on_user"]))
{	
	echo "ERROR\n";
	return ;
}
$id = $_SESSION["loggued_on_user"];
if (file_exists("../$id/list"))
{
    copy ("../$id/list", "../$id/history");
    unlink ("../$id/list");
}
header("Location: thankyou.php");
?>