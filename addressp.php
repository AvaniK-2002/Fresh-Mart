<html>
<head>
<title>Address</title>
<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    width: 60%;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    color: #007bff;
}

p {
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #0056b3;
}

</style>

<?php include 'database_ads.php';
   $housenumber=$_POST['housenumber'];
   $locality=$_POST['locality'];
   $city=$_POST['city'];
   $pincode=$_POST['pincode'];
   $email=$_POST['email'];
   $phoneno=$_POST['phoneno'];
   mysqli_query($link,"INSERT INTO address (housenumber,locality,city,pincode,email,phoneno) VALUES('$housenumber','$locality','$city','$pincode','$email','$phoneno')"); 
?>
</head>
<body>
<br/>
<br/>
<br/>
<div class="container">
    <h1>Thank You!</h1>
    <p>Your order has been received and will be processed shortly.</p>
    
    
   <a href="address.php" style="float:left;">Back</a>
   <a href="grocery.html" style="float:right;">Home</a>
</div>
</body>
</html>
