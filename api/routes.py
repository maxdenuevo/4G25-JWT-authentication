from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from models import db, User

auth_bp = Blueprint('auth', __name__)
bcrypt = Bcrypt()
jwt = JWTManager()


@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data['email']
    password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    new_user = User(email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(message="User created"), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify(token=access_token), 200
    else:
        return jsonify(message="Invalid credentials"), 401


@auth_bp.route('/private', methods=['GET'])
@jwt_required()
def private():
    current_user_id = get_jwt_identity()
    return jsonify(message=f"Welcome user {current_user_id}"), 200
