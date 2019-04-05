<?php
function auth($login, $passwd)
{
	$acct = unserialize(file_get_contents("../private/passwd"));
	$pw = hash("whirlpool", $passwd);
	foreach ($acct as $key=>$val)
	{
		if ($val["login"] == $login)
		{
			if ($val["passwd"] == $pw)
			{
				$_SESSION["loggued_on_user"] = $login;
				return (TRUE);
			}
			else
			{
				return (FALSE);
			}
		}
	}
	return (FALSE);
}
?>