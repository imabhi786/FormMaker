<?php
session_start();
?>
<html>
<head>
	<title>Answers</title>
	<link href="https://fonts.googleapis.com/css?family=Abel|Quicksand" rel="stylesheet">
	<style>
     .layout{
     	font-family: 'Quicksand';
     	font-weight: 300;
     	color:white;
     	height:430px;
     	background-color: #5fd852;
     	margin: 100px 200px;
     	margin-top: 10px;
     	padding: 20px;
     	border-radius: 10px;
     	font-size: 25px;
     }
    </style>
</head>
<body>
	<center>
		<h1 style="padding-top: 50px;font-family: 'Quicksand';color: black"> Submitted Details</h1>
		<div class="layout">
   <?php
   if(isset($_POST['submit'])){
   	 $s=0;
     for(;$s<count($_SESSION)-1;$s++) {
   		echo $_POST[$_SESSION["no".$s]].'<br><br>';
   	 }
   	 print_r($_POST[$_SESSION["no".$s]]);
   }
   session_destroy();
      ?>
  </div>
  </center>
</body>
</html>