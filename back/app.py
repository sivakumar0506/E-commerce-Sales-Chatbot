from dotenv import load_dotenv

load_dotenv()
from flask import Flask
from flask_cors import CORS
from config import Config
from models import db
from auth.routes import auth_bp
from chatbot.routes import chatbot_bp


app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(chatbot_bp, url_prefix='/api/chat')

if __name__ == '__main__':
    app.run(debug=True)
