<!DOCTYPE html>
<html>
<head>
<style>
body{
	background-image: url("concrete-road.jpg");
    background-position: center;
    background-size: cover;
}
#myCanvas
{
    margin-top: 30px;
	border-width:10px;
	background-color: white; 
	border-style:ridge;
}

h1,h3,h4
{
	color: rgb(255, 241, 43) !important;
}
</style>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	<title>Valet Parking </title>
</head>
<body onload="add();">

<center>
<h1>Valet Parking</h1>
<h3>Move the green car with arrow keys</h3>
<h4>
	<b class="text-danger">NOTE : </b> IF CAR IS NOT VISIBLE PRESS ANY ARROW KEY
</h4>

	<canvas id="myCanvas" width="800" height="400">
	</canvas>


</center>
<script src="main.js">
</script>
</body>
</html>