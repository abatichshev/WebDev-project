# 📚 Bookstore Backend

This is the Django + DRF + JWT backend for the Bookstore application.

---

## 🗂️ Structure

```
backend/
├── manage.py
├── backend/            # project settings, URLs, WSGI, ASGI
└── bookstore/          # your app: models, views, serializers, etc.
```

---

## 🚀 Quick Start

### Create & activate virtual env (Windows):

```bash
cd backend
python -m venv ../venv
venv\Scripts\activate
```

_(macOS/Linux: `source ../venv/bin/activate`)_

### Install dependencies:

```bash
pip install -r requirements.txt
```

### Apply migrations & create superuser:

```bash
python manage.py migrate
python manage.py createsuperuser
```

### Run development server:

```bash
python manage.py runserver
```

API root: [http://127.0.0.1:8000/api/](http://127.0.0.1:8000/api/)

---

## 🔑 Authentication (JWT)

### Obtain tokens  
**POST** `/api/token/`  
Request JSON:
```json
{ "username": "<user>", "password": "<pass>" }
```

Response:
```json
{ "refresh": "…", "access": "…" }
```

### Refresh access token  
**POST** `/api/token/refresh/`  
```json
{ "refresh": "<refresh_token>" }
```

---

## 📦 Endpoints

| Method | URL                          | Description                            |
|--------|------------------------------|----------------------------------------|
| GET    | /api/authors/                | List & create authors                  |
| GET    | /api/categories/             | List & create categories               |
| GET    | /api/books/                  | List & create books                    |
| GET    | /api/books/<id>/             | Retrieve / update / delete a book     |
| GET    | /api/orders/                 | List current user’s orders             |
| POST   | /api/orders/                 | Create an order (`{"book":<id>, "quantity":1}`) |

> **Note:** All `/api/orders/` calls require an `Authorization: Bearer <access_token>` header.
