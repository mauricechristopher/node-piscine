<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="UTF-8">
		<title>H&C</title>
		<link href="style.css" rel="stylesheet">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">		
	</head>
	<body>
		<div class="wrapper">
			<div class="header">
			<div class="navbar nav">
					<a href="cart_page.php">Cart</a>
					<?php
					session_start();
					if (!($_SESSION["loggued_on_user"]))
					{
					?>
					<a href="login_page.php">Login</a>
					<?php
					}
					else
					{
						if (file_exists("../private/passwd"))
						{
							$acct = unserialize(file_get_contents("../private/passwd"));
							foreach ($acct as $user)
								{
									if ($user["login"] === $_SESSION["loggued_on_user"])
									{
										if ($user["login"] === "admin")
										{
										?>
										<a href="admin.php">Upload Product</a>
										<?php
										}
									}
								}
						}
					?>
					<a href="logout.php">Logout</a>
					<a href="myaccount.php">Hi! <?php echo $_SESSION["loggued_on_user"]?></a>
					<?php
					}
					?>
				</div>
				<div class="main_nav nav">
						<a href="index.php"><img class="logo" src="logo.png"></a>
						<a href="women.php">Women</a>
						<a href="men.php">Men</a>
						<a href="sale.php">Sale</a>
						<a href="contact.php">Contact</a>
				</div>
			</div>
			<div class="product_row">
				<?php
				if (file_exists('../product') && file_exists('../product/list'))
				{
					$pro = unserialize(file_get_contents('../product/list'));
					foreach ($pro as $key=>$value)
					{
						if ($value["category"] === "men")
						{
				?>
				<div class="responsive">
					<div class="gallery">
						<form method="post" action="cart.php">
							<input type="hidden" name="product_name" value="<?php echo $value["product_name"];?>">
							<input type="hidden" name="product_quantity" value="1">
							<input type="hidden" name="product_price" value="<?php echo $value["product_price"];?>">
							<input type="hidden" name="product_image" value="<?php echo $value["product_image"];?>">
							<input type="submit" name="submit" value="Add to Cart" style="margin-right: 5px">
						</form>	
							<img src="<?php echo $value["product_image"]?>">
						
							<div class="product_name"><?php echo $value["product_name"]?></div>
							<div class="product_category"><?php echo $value["category"]?></div>
							<div class="product_price">$ <?php echo $value["product_price"]?></div>
							<div class="product_price">Stock left: <?php echo $value["product_quantity"]?></div>					
					</div>
				</div>
				<?php
						}
					}
				}
				?>
			</div>
	</body>
	<footer>
		<p>© 2019 sahan and mchristo. All Rights Reserved</p>
	</footer>
</html>
