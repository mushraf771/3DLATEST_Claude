<?php
// filepath: d:\DevOps\Training\app2\3DGSPLATEST\getGeom.php

// This script retrieves geometric data from the database and returns it in JSON format.

header('Content-Type: application/json');

// Database connection parameters
$host = 'db'; // Use the service name defined in docker-compose.yml
$dbname = '3dgsplates';
$user = 'postgres';
$password = 'root';

try {
    // Create a new PDO instance
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare and execute the SQL query to retrieve geometric data
    $stmt = $pdo->prepare("SELECT * FROM terrain");
    $stmt->execute();

    // Fetch all results
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the data as JSON
    echo json_encode($data);
} catch (PDOException $e) {
    // Handle any errors
    echo json_encode(['error' => $e->getMessage()]);
}
?>