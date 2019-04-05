<?php
if (!$_POST["submit"] === "OK")
{	
	echo "ERROR\n";
	return ;
}
if (!file_exists("../product") || !file_exists("../product/list"))
	mkdir ("../product");
if (file_exists("../private/passwd"))
{
	$prod = unserialize(file_get_contents("../product/list"));
	foreach ($prod as $value)
		{
			if ($value["product_name"] === $_POST["product_name"])
			{
				echo "ERROR\n";
				return ;
			}
		}
}
$prod = unserialize(file_get_contents("../product/list"));
$prod_info["product_name"] = $_POST["product_name"];
$prod_info["product_price"] = $_POST["product_price"];
$prod_info["product_quantity"] = $_POST["product_quantity"];
$prod_info["product_image"] = $_POST["product_image"];
$prod_info["category"] = $_POST["category"];
$prod[] = $prod_info;
file_put_contents("../product/list", serialize($prod));
echo "OK\n";
header("Location: admin.php");
?>