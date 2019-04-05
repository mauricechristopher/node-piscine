<?PHP
if (!$_POST["submit"] === "OK" || $_POST["login"]==="" || $_POST["oldpw"]==="" || $_POST["newpw"]==="" || !file_exists("../private") || !file_exists("../private/passwd"))
{	
	echo "ERROR\n";
	return ;
}
$acct = unserialize(file_get_contents("../private/passwd"));
$login = $_POST["login"];
$oldpw = hash("whirlpool", $_POST["oldpw"]);
$newpw = hash("whirlpool", $_POST["newpw"]);
foreach ($acct as $key=>$user)
{
    if ($user["login"] === $login && $user["passwd"] === $oldpw && $oldpw !== $newpw)
    {
        $acct[$key]["passwd"] = $newpw;
        file_put_contents("../private/passwd", serialize($acct));
        header("Location: index.html");
        echo "OK\n";
        return ;
    }
}
echo "ERROR\n";
return ;
?>