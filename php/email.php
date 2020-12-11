<?php
//Contac us
if($_POST['contact_us']==1)
{
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$msg=$_POST['message'];


	/*************** Email ****************/
	$subject = 'Contact Us';

	$message= "<html>
		<head>
		</head>
		<body>
		    <h3>Contact Us Details :</h3>
			<p>Name: ".$name."</p>
			<p>Email :".$email."</p>
			<p>Phone No :".$phone."</p>
			<p>Message :".$msg."</p>
		</body>
	</html>";
	
	email($message, $subject);
}
//pop Up
else if($_POST['pop_up']==1)
{
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$location=$_POST['location'];
	$room_type=$_POST['room_type'];
	$price_range=$_POST['price_range'];
	$msg=$_POST['message'];
	
	/*************** Email ****************/
	$subject = 'GET IN TOUCH';
	
	$message= "<html>
		<head>
		</head>
		<body>
		<h3>Booking Request Details :</h3>
			<p>Name: ".$name."</p>
			<p>Email :".$email."</p>
			<p>Phone No :".$phone."</p>
			<p>location :".$location."</p>
			<p>Message :".$msg."</p>
		</body>
	</html>";
	
	email($message, $subject);
}
//Book Now
else if($_POST['enquiry']==1)
{
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$address=$_POST['address'];
	$location=$_POST['location'];
	$msg=$_POST['message'];
	
	/*************** Email ****************/
	$subject = 'Information';
	
	$message= "<html>
		<head>
		</head>
		<body>
		    <h3>Enquiry Details :</h3>
			<p>Name: ".$name."</p>
			<p>Email :".$email."</p>
			<p>Phone No :".$phone."</p>
			<p>Address :".$address."</p>
			<p>Nearest Location :".$location."</p>
			<p>Message :".$msg."</p>
		</body>
	</html>";
	
	email($message, $subject);
}
else
{
	header("Location:index.html");
}


//email send
function email($message, $subject)
{
	$to= "decentweblab@gmail.com";
    $from='decentweblab@gmail.com'; 
	
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// Additional headers
	$headers .= 'From: Decent Web Lab <'.$from.'>' . "\r\n";
	$sendMail=mail($to, $subject, $message, $headers);
	
	
	header('Location:'.$_SERVER['HTTP_REFERER']);
}
?>