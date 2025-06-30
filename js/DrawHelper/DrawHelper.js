 
function DrawHelper() {
    this.drawLine = function(start, end) {
        // Implementation for drawing a line on the map
    };

    this.drawPolygon = function(points) {
        // Implementation for drawing a polygon on the map
    };

    this.clearDrawings = function() {
        // Implementation for clearing all drawings from the map
    };

    this.setColor = function(color) {
        // Implementation for setting the color of the drawings
    };

    this.setLineWidth = function(width) {
        // Implementation for setting the width of the lines
    };
}

// Export the DrawHelper class for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DrawHelper;
}