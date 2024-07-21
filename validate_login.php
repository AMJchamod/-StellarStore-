<?php
// validate_login.php
$servername = "localhost"; // Your database server name
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "my_database"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the submitted username and password
$submitted_username = $_POST['username'];
$submitted_password = $_POST['password'];

// Prepare and bind
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $submitted_username);

// Execute the statement
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Fetch the result row
    $row = $result->fetch_assoc();
    // Verify the password
    if (password_verify($submitted_password, $row['password'])) {
        echo json_encode(['status' => 'success', 'username' => $submitted_username]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid password']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid username']);
}

$stmt->close();
$conn->close();
?>
