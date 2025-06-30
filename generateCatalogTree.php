<?php
// filepath: d:\DevOps\Training\app2\3DGSPLATEST\generateCatalogTree.php

// This script generates a catalog tree for the 3D Globe application.
// It retrieves data from the database and formats it into a hierarchical structure.

require 'db_connection.php'; // Include your database connection file

function generateCatalogTree($parentId = 0) {
    global $conn; // Use the global database connection

    $tree = [];
    $query = "SELECT id, name FROM catalog WHERE parent_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $parentId);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        $children = generateCatalogTree($row['id']); // Recursively get children
        $tree[] = [
            'id' => $row['id'],
            'name' => $row['name'],
            'children' => $children
        ];
    }

    return $tree;
}

// Fetch the catalog tree starting from the root
$catalogTree = generateCatalogTree();

// Output the catalog tree as JSON
header('Content-Type: application/json');
echo json_encode($catalogTree);
?>