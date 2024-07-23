<?php
 if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_POST['username'];
    $password =$_POST['password'];

    //database connection
    $host="localhost";
    $dbusername="root";
    $dbpassword="";
    $dbname="stellarstore";

    $conn= new mysqli($host,$dbusername,$dbpassword,$dbname);
    if($conn->connect_error){
        die("Connection failed".$conn->connect_error);
    }
    $query="SELECT * FROM users WHERE username='$username' AND password='$password'";
      $result=$conn->query($query);
      if($result->num_rows==1){
       
        echo "<script>alert('Signup successful!'); window.location.href='home.html';</script>";


      }else{
        echo "<script>alert('Signup fail!'); window.location.href='signup.html';</script>";
         exit();
      }
      $conn->close();
    } 
    ?>