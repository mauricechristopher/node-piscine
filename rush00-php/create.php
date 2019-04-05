<?php
if (!$_POST["submit"] === "OK" || !$_POST["login"] || !$_POST["passwd"])
{	
	echo "ERROR\n";
	return ;
}
if (!file_exists("../private") || !file_exists("../private/passwd"))
	mkdir ("../private");
if (file_exists("../private/passwd"))
{
	$acct = unserialize(file_get_contents("../private/passwd"));
	foreach ($acct as $user)
        {
            if ($user["login"] === $_POST["login"])
            {
                echo "ERROR\n";
                return ;
            }
        }
}

$acct_info["login"] = $_POST["login"];
$acct_info["passwd"] = hash("whirlpool", $_POST["passwd"]);
$acct_info["name"] = $_POST["name"];
$acct_info["address"] = $_POST["address"];
$acct_info["phone"] = $_POST["phone"];
$acct_info["email"] = $_POST["email"];
$acct_info["userrole"] = $_POST["userrole"];
$acct[] = $acct_info;
file_put_contents("../private/passwd", serialize($acct));
echo "OK\n";
header("Location: login_page.php");
?>
