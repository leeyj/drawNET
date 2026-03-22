import os
from flask import Flask
from jinja2 import ChoiceLoader, FileSystemLoader
from routes.main_routes import main_bp
from routes.api_routes import api_bp

def create_app():
    app = Flask(__name__)
    
    # Allow loading templates from both 'templates' and 'tools' folders
    app.jinja_loader = ChoiceLoader([
        FileSystemLoader(os.path.join(app.root_path, 'templates')),
        FileSystemLoader(os.path.join(app.root_path, 'tools'))
    ])
    
    # Register Blueprints
    app.register_blueprint(main_bp)
    app.register_blueprint(api_bp)
    
    # Diagnostic: Check if loaded from source or binary
    import routes.api_routes as ar
    import logic.license_manager as lm
    print(f"[*] API Routes Loaded From: {ar.__file__}")
    print(f"[*] License Manager Loaded From: {lm.__file__}")
    
    return app


if __name__ == '__main__':
    app = create_app()
    
    # 로컬 실행 최적화
    print("------------------------------------------")
    print("drawNET Premium Server Starting...")
    print("URL: http://127.0.0.1:5000")
    print("------------------------------------------")
    
    app.run(debug=True, port=5000)
