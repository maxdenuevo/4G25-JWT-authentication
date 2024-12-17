from flask import Flask
from flask_cors import CORS
from models import db
from routes import auth_bp
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

db.init_app(app)

from flask_jwt_extended import JWTManager
jwt = JWTManager(app)
app.register_blueprint(auth_bp)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)