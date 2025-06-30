 
# README.md for 3dterrainserver

# 3D Terrain Server

This README provides information on setting up and running the 3D Terrain Server application.

## Overview

The 3D Terrain Server is part of the 3D Globe Application, which provides terrain data and serves it to clients for visualization. This server is built using Node.js and Express.

## Prerequisites

- Docker
- Docker Compose

## Setup Instructions

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd 3DGSPLATEST
   ```

2. **Build the Docker Images**

   Navigate to the root of the project and build the Docker images using Docker Compose:

   ```bash
   docker-compose build
   ```

3. **Run the Application**

   Start the application using Docker Compose:

   ```bash
   docker-compose up
   ```

   This will start the terrain server, database, Flask app, and web frontend.

4. **Access the Application**

   - Terrain Server: [http://localhost:8000](http://localhost:8000)
   - Flask API: [http://localhost:5000](http://localhost:5000)
   - Web Frontend: [http://localhost:8080](http://localhost:8080)

## Database Initialization

The database is initialized using the `init.sql` script located in the `db` directory. This script creates the necessary tables and populates them with initial data.

## API Endpoints

The terrain server exposes various endpoints for accessing terrain data. Refer to the API documentation for details on available endpoints and their usage.

## Testing

To run tests, ensure you have the necessary configurations in the `.github/workflows/test.yml` file. You can trigger the tests by pushing changes to the `testing` branch.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.