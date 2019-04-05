<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link href="style.css" rel="stylesheet">
		<title>H&C Admin</title>
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
				</div>
				<div class="main_nav nav">
					<a href="index.php"><img class="logo" src="logo.png"></a>
					<a href="women.php">Women</a>
					<a href="men.php">Men</a>
					<a href="sale.php">Sale</a>
					<a href="contact.php">Contact</a>
				</div>
			</div>
			<div class=login_form>
				<form method="post" action="upload_pro.php">
					<div class="login_box">
						<div class="login_field product_field">
							<h1>Upload Product</h1>
                            <input type="text" name="product_name" required placeholder="Product Name">
                            <br/>
                            <input type="number" name="product_price" required placeholder="Product Price">
                            <br/>
                            <input type="number" name="product_quantity" required placeholder="Product Quantity">
                            <br/>
                            <input type="url" name="product_image" required placeholder="Product Image URL">
							<br/>
                            <select name="category">
                                    <option value="" disabled selected>Select Category</option>
                                    <option value="women">Women</option>
                                    <option value="men">Men</option>
                                    <option value="sale">Sale</option>
                            </select>
							<br/>
						</div>
						<div class="loginbtn"><input type="submit" name="submit" value="OK" style="margin-right: 5px"></div>
						
					</div>
				</form>
			</div>
		</div>
	</body>
	<footer>
			<p>© 2019 sahan and mchristo. All Rights Reserved</p>
	</footer>
</html>