from flask import Blueprint, request, jsonify
from models import db, Product

chatbot_bp = Blueprint('chatbot', __name__)

@chatbot_bp.route('', methods=['POST'])  # Route: /api/chat
def handle_query():
    data = request.json
    query = data.get('message', '').lower()

    results = Product.query.filter(Product.name.ilike(f'%{query}%')).all()

    if not results:
        return jsonify({"message": "No products found matching your query.", "products": []})

    products = [{
        "id": p.id,
        "name": p.name,
        "description": p.description,
        "price": p.price,
        "category": p.category,
        "image": p.image
    } for p in results]

    return jsonify({"message": f"Found {len(results)} product(s) matching your query.", "products": products})
