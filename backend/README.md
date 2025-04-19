# Django Backend — Bookstore API

## Description
A simple backend built with Django and DRF for an online bookstore.  
It provides REST API endpoints for managing books, cart, and orders.  
Authentication is handled using JWT (via SimpleJWT).

## Getting Started

1. Clone the repository
2. Navigate to the `backend` directory
3. Install dependencies:
pip install django djangorestframework djangorestframework-simplejwt django-cors-headers



<<<<<<< HEAD
=======

>>>>>>> 813ad3ffce5a163008ee468974295dce2606c62a


4. Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

5. Create a superuser:

```bash
python manage.py createsuperuser
```

6. Start the development server:

```bash
python manage.py runserver
```

## Authentication

- `POST /api/login/` — obtain JWT token
- `POST /api/refresh/` — refresh token

## API Endpoints

| Method| Endpoint         | Description        |
|-------|------------------|--------------------|
| GET   | `/api/books/`    | Retrieve all books |
| POST  | `/api/cart/`     | Add item to cart   |
| POST  | `/api/orders/`   | Create an order    |

## labs

- Django
- Django REST Framework
- SimpleJWT
- CORS Headers
