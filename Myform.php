<?php
session_start();
    define('CSSPATH', 'css/');
    if (isset($_POST['submit'])) 
    {
		if(isset($_POST['radio']))
		{
		   $val= $_POST['radio'];
		   if($val=='1')
		   {
		   	   $cssitem='main1.css';
		   }
		   elseif($val=='2')
		   {
               $cssitem='main2.css';
		   }
		   elseif($val=='3')
		   {
		   	   $cssitem='main3.css';
		   }	   
		}
	}
	$l=0;
	
?>

<html>
<head>
	<title><?php echo $_POST["elen_1"]; ?></title>
	<link rel="stylesheet" type="text/css" href="css/formmaker.css">
	<link rel="stylesheet" type="text/css" href="<?php echo (CSSPATH . "$cssitem"); ?>">
	<link href="https://fonts.googleapis.com/css?family=Abel|Quicksand" rel="stylesheet">
</head>
<body>
	<center><heading class="heading"><?php echo $_POST["eleh_1"]; ?></heading>
	<form action="answer.php" method="post">
		<br>
		<?php
		  if(isset($_POST['submit']))
		  {
		  	$s=1;
		  	$m=$_POST['j_value'];
		  	if($m>=2){
		  	for($s=1;$s<=$m;)
		  	{
		  		 $k=$s+1;
		  		 if(isset($_POST["ele_$s"]) and !isset($_POST["ele_$k"]))
		  		 {
		  		 	$name=$_POST["ele_$s"];
		  		 	$_SESSION["no".$l]=$name;
		  		 	$l++;
	                echo '<span class="label">'.$_POST["ele_$s"].'</span><br> <input type="text" name="'.$name.'" required><br>';
	                break;
		  		 }
		  		 else{
		  		    $name=$_POST["ele_$s"];
		  		    $_SESSION["no".$l]=$name;
		  		    $l++;
		  		    echo '<span class="label">'.$_POST["ele_$s"].'</span><br> <input type="text" name="'.$name.'" required><br>';
		  		    $s++;
		  		 }
		  	}
		  }
		 }
		  
		?>
		<br>
		<?php
		  if(isset($_POST['submit']))
		  {
		  	$s=1;
		  	$n=$_POST['k_value'];
		  	if($n>=2){
		  	for($s=1;$s<=$n;)
		  	{
		  		 $k=$s+1;
		  		 if(isset($_POST["rad_$s"]) and !isset($_POST["rad_$k"]))
		  		 {
		  		 	$name=$_POST["rad_$s"];
		  		 	$_SESSION["no".$l]=$name;
		  		 	$l++;
	                echo '<span class="label">'.$_POST["rad_$s"].'</span><br> <br><input type="radio" name="'.$name.'" value="Male">Male<input type="radio" name="'.$name.'" value="Female">Female<input type="radio" name="'.$name.'" value="Other">Other<br><br>';
	                break;
		  		 }
		  		 else{
		  		    $name=$_POST["rad_$s"];
		  		    $_SESSION["no".$l]=$name;
		  		    $l++;
		  		    echo '<span class="label">'.$_POST["rad_$s"].'</span><br><br><input type="radio" name="'.$name.'" required><br>';
		  		    $s++;
		  		 }
			}

	       }
	     }
		?>
        <?php
		  if(isset($_POST['submit']))
		  {
		  	$s=1;
		  	$p=$_POST['l_value'];
		  	if($p>=2){
		  	for($s=1;$s<=$p;)
		  	{
		  		 $k=$s+1;
		  		 if(isset($_POST["check_$s"]) and !isset($_POST["check_$k"]))
		  		 {
		  		 	$name=$_POST["check_".$s];
	                echo '<span class="label">'.$_POST["check_$s"].'</span><br><br> <input type="checkbox" name="'.$name.'[]" value="Singing">Singing<input type="checkbox" name="'.$name.'[]" value="Cooking">Cooking<input type="checkbox" name="'.$name.'[]" value="Dancing">Dancing<input type="checkbox" name="'.$name.'[]" value="Others">Others<br><br>';
                    $_SESSION['no'.$l]=$name;
                    $l++;
                    break;
		  		 }
		  	}
		  }
		}
		?>
    <!-- <input type="hidden" name="input_array" value="<?php echo $answer; ?>" /> -->
    <input type="submit" name="submit" value="Submit">
    </form>
    </center>
</body>
</html>