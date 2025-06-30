from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import psycopg2
from psycopg2 import sql

app = Flask(__name__)
CORS(app)

# Database connection parameters
DB_HOST = os.getenv('DB_HOST', 'db')
DB_NAME = os.getenv('POSTGRES_DB', '3dgsplates')
DB_USER = os.getenv('POSTGRES_USER', 'postgres')
DB_PASSWORD = os.getenv('POSTGRES_PASSWORD', 'root')


def get_db_connection():
    conn = psycopg2.connect(
        host=DB_HOST,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    return conn

# Define a simple route for testing
@app.route("/")
def home():
    return (
            "<h1>Flask API is running! for 3DGSPLATEST - Terrain Data Service</h1>"
            "<p>Use <a href='/terrain'>/terrain</a> in url</p>"
        )


@app.route('/terrain', methods=['GET'])
def get_terrain_data():
    zoom = request.args.get('zoom', type=int)
    x = request.args.get('x', type=int)
    y = request.args.get('y', type=int)

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(sql.SQL("SELECT * FROM terrain WHERE zoom = %s AND x = %s AND y = %s"), (zoom, x, y))
    terrain_data = cursor.fetchone()
    cursor.close()
    conn.close()

    if terrain_data:
        return jsonify({
            'id': terrain_data[0],
            'zoom': terrain_data[1],
            'x': terrain_data[2],
            'y': terrain_data[3],
            'data': terrain_data[4]
        })
    else:
        return jsonify({'error': 'Terrain data not found'}), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)