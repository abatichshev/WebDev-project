# 📚 Bookstore Frontend

This is the Angular 19 application for the Bookstore.

---

## 🗂️ Structure

```
frontend/
├── src/
│   ├── app/
│   │
│   └── environments/
├── angular.json
└── package.json
```

---

## 🚀 Quick Start

**Install Angular CLI (if needed):**
```bash
npm install -g @angular/cli
```

**Install dependencies:**
```bash
cd frontend
npm install
```

**Set the API base URL in `src/environments/environment.ts`:**
```ts
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api'
};
```

**Serve the app:**
```bash
ng serve
```

Open [http://localhost:4200](http://localhost:4200)

---

## 🔑 Auth Flow

- Login (built-in UI) uses `/api/token/` to get JWTs.
- `AuthInterceptor` automatically adds `Authorization: Bearer <access>` to all API requests.
- Logout clears tokens from `localStorage`.

---

## 📦 Features
`
- Book list / detail pages
- Login / JWT token storage
- Create orders (POST `/orders/`)
- Responsive layout with Bootstrap

---

## 🔧 Scripts

| Command         | What it does              |
|-----------------|--------------------------|
| npm start       | ng serve (dev server)     |
| npm run build   | Build for production      |
| npm test        | Run unit tests via Karma  |

---

## 🤝 Contributing

Feel free to open issues or PRs.
