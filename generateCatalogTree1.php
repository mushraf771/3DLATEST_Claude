 
<?php
// filepath: d:\DevOps\Training\app2\3DGSPLATEST\generateCatalogTree1.php

// This script generates a catalog tree structure for the 3D Globe application.
// It retrieves data from the database and formats it into a hierarchical structure.

require 'getGeom.php'; // Include the geometry retrieval script

function generateCatalogTree($parentId = null) {
    global $db; // Assuming $db is the database connection

    $tree = [];
    $query = "SELECT id, name FROM catalog WHERE parent_id " . ($parentId ? "= ?" : "IS NULL");
    $stmt = $db->prepare($query);
    if ($parentId) {
        $stmt->bind_param("i", $parentId);
    }
    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        $children = generateCatalogTree($row['id']);
        $tree[] = [
            'id' => $row['id'],
            'name' => $row['name'],
            'children' => $children
        ];
    }

    return $tree;
}

// Example usage
$catalogTree = generateCatalogTree();
header('Content-Type: application/json');
echo json_encode($catalogTree);
?>