# database/seed.py

import sys
import os
import random

# Add parent directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from models import db, Product
from app import app

with app.app_context():
    data = [
        ("iPhone 14", "Latest Apple smartphone", "electronics", 799.99),
        ("Samsung TV", "4K Smart LED TV", "electronics", 399.99),
        ("Harry Potter Book Set", "7-book hardcover set", "books", 59.99),
        ("Men's T-shirt", "Cotton round-neck", "textiles", 14.99),
        ("Laptop Backpack", "Waterproof travel backpack", "accessories", 34.99),
        ("Bluetooth Speaker", "Portable wireless speaker", "electronics", 49.99),
        ("LED Lamp", "Rechargeable study lamp", "home", 22.99),
        ("Running Shoes", "Comfortable sports shoes", "footwear", 89.99)
    ]

    for i in range(100):
        name, desc, cat, price = random.choice(data)
        product = Product(
            name=f"{name} {i}",
            description=desc,
            category=cat,
            price=price + random.randint(1, 50),
            image="https://via.placeholder.com/150"
        )
        db.session.add(product)

    db.session.commit()
    print("✅ Database seeded with sample product data.")
