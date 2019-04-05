<?php
session_start();
if ($_POST["submit"] != "Add to Cart" || !($_SESSION["loggued_on_user"]))
{	
    if (!($_SESSION["loggued_on_user"]))
    {
        header("Location: login_page.php");
        return ;
    }
}
$id = $_SESSION["loggued_on_user"];
if (!file_exists("../$id") || file_exists("../$id/list"))
{
    mkdir ("../$id");
}
$cart = unserialize(file_get_contents("../$id/list"));
$cart_info["product_name"] = $_POST["product_name"];
$cart_info["product_price"] = $_POST["product_price"];
$cart_info["product_quantity"] = $_POST["product_quantity"];
$cart_info["product_image"] = $_POST["product_image"];
$cart[] = $cart_info;
file_put_contents("../$id/list", serialize($cart));
header('Location: index.php');
echo "OK\n";
exit ();
?>