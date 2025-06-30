 
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the terrain directory
app.use('/terrain', express.static('terrain'));

// Sample endpoint to get terrain data
app.get('/terrain/:zoom/:x/:y', (req, res) => {
    const { zoom, x, y } = req.params;
    // Here you would typically fetch the terrain data from a database
    // For demonstration, we'll return a placeholder response
    res.json({
        zoom: zoom,
        x: x,
        y: y,
        data: `Placeholder data for ${zoom}/${x}/${y}`
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Terrain server running at http://localhost:${port}`);
});