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
					<a href="#cart">Cart</a>
					<?php
					session_start();
					if (!($_SESSION["loggued_on_user"]))
					{
					?>
					<a href="login.php">Login</a>
					<?php
					}
					else
					{
					?>
					<a href="myaccount.php">My Account</a>	
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
                
                <div id="contact-form">
                    <h1>Find us here!</h1>
                </div>

                <div id="Map" style="height:500px"></div>
                <script src="OpenLayers.js"></script>
                <script>
                var lat = 37.551522;
                var lon = -122.056474;
                var zoom = 18;

                var fromProjection = new OpenLayers.Projection("EPSG:4326"); // Transform from WGS 1984
                var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
                var position = new OpenLayers.LonLat(lon, lat).transform(fromProjection, toProjection);

                map = new OpenLayers.Map("Map");
                var mapnik = new OpenLayers.Layer.OSM();
                map.addLayer(mapnik);

                var markers = new OpenLayers.Layer.Markers("Markers");
                map.addLayer(markers);
                markers.addMarker(new OpenLayers.Marker(position));

                map.setCenter(position, zoom);
                </script>

			</div>

			</div>
	</body>
	<footer>
		<p>© 2019 sahan and mchristo. All Rights Reserved</p>
	</footer>
</html>