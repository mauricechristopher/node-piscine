<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link href="style.css" rel="stylesheet">
		<title>H&C Register</title>
	</head>
	<body>
		<div class="wrapper">
			<div class="header">
				<div class="navbar nav">
					<a href="#cart">Cart</a>
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
			<div class=login_form>
				<form method="post" action="create.php"  onsubmit="return checkform(this);">
					<div class="login_box">
						<div class="login_field">
							<h1>Register</h1>
							<input type="text" name="login" required placeholder="Username">
							<br/>
							<input type="password" name="passwd" required placeholder="Password">
							<br/>
							<input type="text" name="name" placeholder="Full Name">
							<br/>
							<input type="text" name="address" placeholder="Address">
							<br/>
							<input type="text" name="phone" placeholder="Phone Number">
							<br/>
							<input type="text" name="email" placeholder="Email">
							<br/>
							<select name="userrole" required>
                                    <option value="" disabled selected>Select User-role</option>
                                    <option value="admin">Admin</option>
                                    <option value="customer">Customer</option>
                            </select>
							<!-- START CAPTCHA -->
							<br>
							<div class="capbox">

							<div id="CaptchaDiv"></div>

							<div class="capbox-inner">
							Type the above number:<br>

							<input type="hidden" id="txtCaptcha">
							<input type="text" name="CaptchaInput" id="CaptchaInput" size="15"><br>

							</div>
							</div>
							<br><br>
							<!-- END CAPTCHA -->

						</div>
						<div class="loginbtn"><input type="submit" name="submit" value="OK" style="margin-right: 5px"></div>
						
					</div>
					<div class="reg_pw">
					</div>
				</form>

				<script type="text/javascript">

				// Captcha Script

				function checkform(theform) {
					var why = "";

					if (theform.CaptchaInput.value == "") {
						why += "- Please Enter CAPTCHA Code.\n";
					}
					if (theform.CaptchaInput.value != "") {
						if (ValidCaptcha(theform.CaptchaInput.value) == false) {
							why += "- The CAPTCHA Code Does Not Match.\n";
						}
					}
					if (why != "") {
						alert(why);
						return false;
					}
				}

				var a = Math.ceil(Math.random() * 9) + '';
				var b = Math.ceil(Math.random() * 9) + '';
				var c = Math.ceil(Math.random() * 9) + '';
				var d = Math.ceil(Math.random() * 9) + '';
				var e = Math.ceil(Math.random() * 9) + '';

				var code = a + b + c + d + e;
				document.getElementById("txtCaptcha").value = code;
				document.getElementById("CaptchaDiv").innerHTML = code;

				// Validate input against the generated number
				function ValidCaptcha() {
					var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
					var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
					if (str1 == str2) {
						return true;
					} else {
						return false;
					}
				}

				// Remove the spaces from the entered and generated code
				function removeSpaces(string) {
					return string.split(' ').join('');
				}
				</script>

			</div>
		</div>
	</body>
	<footer>
			<p>© 2019 sahan and mchristo. All Rights Reserved</p>
	</footer>
</html>
