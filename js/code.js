// filepath: d:\DevOps\Training\app2\3DGSPLATEST\js\code.js


var viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createDefaultTerrainProviderViewModels
        ? Cesium.createDefaultTerrainProviderViewModels()[0].creationFunction()
        : undefined
});

function initCesium() {
    viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createDefaultTerrainProviderViewModels
            ? Cesium.createDefaultTerrainProviderViewModels()[0].creationFunction()
            : undefined,
        sceneMode: Cesium.SceneMode.SCENE3D,
        shouldAnimate: true
    });

    // Add event listeners for buttons
    document.getElementById('flyToHome').addEventListener('click', flyToHome);
    document.getElementById('addModel').addEventListener('click', add3DModel);
}

function flyToHome() {
    viewer.camera.flyHome(0);
}

function add3DModel() {
    var modelUrl = prompt("Enter the URL of the 3D model:");
    if (modelUrl) {
        var entity = viewer.entities.add({
            name: '3D Model',
            position: Cesium.Cartesian3.fromDegrees(0.0, 0.0, 0.0),
            model: {
                uri: modelUrl,
                minimumPixelSize: 128
            }
        });
        viewer.trackedEntity = entity;
    }
}

// Initialize Cesium when the window loads
window.onload = initCesium;