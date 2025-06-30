function getCoordinates() {
    // This function retrieves geographic coordinates from the user input
    const latitude = parseFloat(document.getElementById('latitudeInput').value);
    const longitude = parseFloat(document.getElementById('longitudeInput').value);
    
    if (isNaN(latitude) || isNaN(longitude)) {
        alert("Please enter valid latitude and longitude values.");
        return;
    }

    return { latitude, longitude };
}

function displayCoordinates() {
    const coords = getCoordinates();
    if (coords) {
        document.getElementById('coordinatesDisplay').innerText = 
            `Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`;
    }
}

document.getElementById('submitCoordinates').addEventListener('click', displayCoordinates);