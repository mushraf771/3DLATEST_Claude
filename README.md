 
# README.md

# 3D Globe Application

## Overview

The 3D Globe Application is a web-based platform for visualizing and interacting with 3D terrain data. It utilizes various technologies including Docker, Flask, PostgreSQL, and CesiumJS to provide a seamless experience for users.

## Project Structure

```
3DGSPLATEST
├── .github
│   └── workflows
│       └── test.yml
├── 3dterrainserver
│   ├── app.js
│   ├── package.json
│   ├── Dockerfile
│   ├── README.md
│   └── terrain
│       ├── layer.json
│       └── ...
├── db
│   ├── Dockerfile
│   └── init.sql
├── js
│   ├── Cesium.js
│   ├── chart.js
│   ├── code.js
│   ├── coordinates.js
│   ├── jquery-3.7.1.min.js
│   ├── html2canvas.min.js
│   ├── cesium-viewshed.js
│   ├── DrawHelper
│   │   └── DrawHelper.js
│   ├── assets
│   │   ├── IAU2006_XYS
│   │   │   ├── IAU2006_XYS_0.json
│   │   │   ├── IAU2006_XYS_1.json
│   │   │   ├── IAU2006_XYS_2.json
│   │   │   └── IAU2006_XYS_27.json
│   │   └── images
│   │       └── readme.txt
│   ├── flask
│   │   ├── app.py
│   │   ├── Dockerfile
│   │   └── requirements.txt
│   └── bootstrap-5.3.3-dist
│       ├── css
│       │   └── readme.txt
│       └── js
│           └── readme.txt
├── css
│   ├── style.css
│   ├── DrawHelper.css
│   ├── widget.css
│   └── style backkup 30 Decempber.css
├── faisalmasjid
│   ├── tileset.json
│   ├── subtrees
│   │   └── 0-0-0-0.subtree
│   └── tiles
│       └── ...
├── outputattribute
│   ├── tileset.json
│   ├── content
│   └── subtrees
├── output_osm_2
│   ├── tileset.json
│   ├── content
│   └── subtrees
├── ouputmaterial
│   ├── tileset.json
│   ├── content
│   └── subtrees
├── docker3dgsp
│   ├── 3dglobe-3dglobe-app.txt
│   ├── 3dglobe-3dglobe-app1.txt
│   ├── 3dglobe-model-server.txt
│   └── 3dglobe-terrain-server.txt
├── .htaccess
├── AOI Timeline.html
├── Dockerfile
├── docker-compose.yml
├── generateCatalogTree.php
├── generateCatalogTree1.php
├── getGeom.php
├── index.html
├── index Backup 30 Dec 2024.html
├── init.sql
└── README.md
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd 3DGSPLATEST
   ```

2. Build and run the application using Docker Compose:

   ```
   docker-compose up --build
   ```

3. Access the application:

   - Terrain Server: `http://localhost:8000`
   - Flask API: `http://localhost:5000`
   - Web Frontend: `http://localhost:8080`

### Database Initialization

The database is initialized using the `init.sql` script located in the `db` directory. It creates the necessary tables and inserts placeholder data.

### Testing

The CI/CD pipeline is defined in `.github/workflows/test.yml`. It includes steps for building and testing the application. Ensure that your tests are defined and ready to run.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.