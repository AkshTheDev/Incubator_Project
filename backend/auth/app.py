from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS
import bcrypt

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="8002263856",
    database="auth"
)
cursor=db.cursor()

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        if not data:
                return jsonify({"error": "No data received"}), 400 
        print("Received data:", data)
        username=data['username']
        first_name=data['first_name']
        last_name = data['last_name']
        email = data['email']
        password = data['password'].encode('utf-8')

        password_hash = bcrypt.hashpw(password, bcrypt.gensalt())

        cursor.execute("SELECT * FROM register WHERE email_id = %s", (email,))
        existing_user = cursor.fetchone()

        if existing_user:
            return jsonify({"error": "Email already registered"}), 400

        cursor.execute("SELECT * FROM register WHERE username = %s",(username,))
        existing_user = cursor.fetchone()

        if existing_user:
            return jsonify({"error": "Username already registered"}), 400

        cursor.execute("INSERT INTO register (username, first_name, last_name, email_id, password) VALUES (%s, %s, %s, %s, %s)",
                        (username, first_name, last_name, email, password_hash))
        db.commit()
        return jsonify({"message": "User registered successfully"}), 201

    except mysql.connector.IntegrityError:
        return jsonify({"error": "Email or Username already registered"}), 400
    
    except Exception as e:
        print("Signup Error:", e) 
        return jsonify({"error": "Something went wrong"}), 500


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password'].encode('utf-8') 

    cursor.execute("SELECT password FROM register WHERE email_id = %s", (email,))
    user = cursor.fetchone()

    if user and bcrypt.checkpw(password, user[0].encode('utf-8')):
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"error": "Invalid email or password"}), 401
    
if __name__ == '__main__':
    app.run(debug=True, port=3000) 





