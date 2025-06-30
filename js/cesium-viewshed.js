 
// filepath: d:\DevOps\Training\app2\3DGSPLATEST\js\cesium-viewshed.js

// Cesium Viewshed Analysis
var viewer = new Cesium.Viewer('cesiumContainer');

// Function to create a viewshed
function createViewshed(position, radius) {
    var viewshed = viewer.entities.add({
        position: position,
        ellipsoid: {
            radii: new Cesium.Cartesian3(radius, radius, radius),
            material: Cesium.Color.RED.withAlpha(0.5)
        }
    });
    return viewshed;
}

// Example usage
var position = Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883);
var radius = 5000; // in meters
createViewshed(position, radius);

// Add event listener for button to create viewshed
document.getElementById('addModel').addEventListener('click', function() {
    createViewshed(position, radius);
});