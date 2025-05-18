# VGOK Forum Backend API

This is the backend API for the VGOK forum platform, built using:
- Node.js
- Express
- Supabase (auth + DB)

---

## 🗂 Folder Structure
This code is part of a monorepo under `vgok/backend-api/`.

---

## 🔧 Local Setup

1. **Navigate to the backend folder:**
```bash
cd vgok/backend-api


| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/signup` | POST | Sign up with email/password |
| `/api/auth/signin` | POST | Login and get token |
| `/api/posts` | GET/POST | Fetch or create forum posts |
| `/api/replies` | POST | Add replies to posts |
| `/api/categories` | GET | List forum categories |
| `/api/ads` | GET/POST | Admin ads management |

---

## 🗂 Swagger Documentation
http://localhost:5000/docs/

---
