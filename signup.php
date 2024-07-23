<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$host = 'localhost'; // Update with your database host
$db = 'stellarstore'; // Update with your database name
$user = 'root'; // Update with your database username
$pass = ''; // Update with your database password

// Create connection
$connection = new mysqli($host, $user, $pass, $db);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Check if form data is posted
if (isset($_POST["username"], $_POST["password"])) {
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    // Validate input
    if (empty($username) || empty($password)) {
        echo "<script>alert('All fields are required.'); window.location.href='signup.html';</script>";
        exit();
    }

    // Prepare the query
    $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

    // Execute the query
    if (mysqli_query($connection, $query)) {
        echo "<script>alert('Signup successful!'); window.location.href='signup.html';</script>";
    } else {
        echo "<script>alert('Error: " . mysqli_error($connection) . "'); window.location.href='signup.html';</script>";
    }
} else {
    echo "<script>alert('Form data not submitted.'); window.location.href='signup.html';</script>";
}

// Close the connection
$connection->close();
?>
<!-- #region -->