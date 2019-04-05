<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link href="style.css" rel="stylesheet">
		<title>H&C Login</title>
	</head>
	<body>
		<div class="wrapper">
			<div class="header">
				<div class="navbar nav">
					<a href="cart.php">Cart</a>
					<a href="login.php">Login</a>
				</div>
				<div class="main_nav nav">
					<a href="index.php"><img class="logo" src="logo.png"></a>
					<a href="women.php">Women</a>
					<a href="men.php">Men</a>
					<a href="sale.php">Sale</a>
					<a href="contact.php">Contact</a>
				</div>
			</div>
			<div class="cart">
				
					<h1>Cart</h1>
					<?php
					session_start();
					$id = $_SESSION["loggued_on_user"];
					if (file_exists("../$id") && file_exists("../$id/list"))
					{
						$pro = unserialize(file_get_contents("../$id/list"));
						foreach ($pro as $key=>$value)
						{
							$total +=$value["product_price"] * $value["product_quantity"];
					?>
					<div class="aParent">
						<div>
							<img src="<?php echo $value["product_image"]?>"><span><?php echo $value["product_name"]?><br/>$ <?php echo $value["product_price"]?><br/>
							Quantity: <input type="number" name="quantity" value="<?php echo $value["product_quantity"]?>" style="width: 30px"><br/>
						</div>
						<div>
							
						</div>
					</div>
					<?php
						}
					}
					?>
				<form method="post" action="purchase.php">
					<div class="total"><h2>Total Price: $<?php echo $total?></h2></div>
					<div class="loginbtn purcahse"><input type="submit" name="submit" value="PURCHASE" style="margin-right: 5px"></div>
				</form>
			</div>
		</div>
	</body>
	<footer>
			<p>© 2019 sahan and mchristo. All Rights Reserved</p>
	</footer>


	</html>

