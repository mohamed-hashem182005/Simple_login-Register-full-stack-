<div align="center">

# 🔐 Simple Login & Register — Full-Stack Web App

### A Clean, Full-Stack Authentication App with Server-Side Rendering

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?logo=mongodb)](https://mongoosejs.com/)
[![EJS](https://img.shields.io/badge/Template-EJS-red)](https://ejs.co/)
[![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://simple-login-register-full-stack.vercel.app)

**🌐 Live Demo:** [simple-login-register-full-stack.vercel.app](https://simple-login-register-full-stack.vercel.app)

</div>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Pages & Routes](#-pages--routes)
- [How It Works](#-how-it-works)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🚀 About The Project

**Simple Login & Register** is a full-stack web application that implements a complete user authentication system — registration, login, and protected pages — using **Node.js**, **Express.js**, **MongoDB**, and **EJS** for server-side rendering.

The app renders all pages dynamically on the server using EJS templates and serves them directly to the browser, making it a classic **SSR (Server-Side Rendered)** full-stack application. Passwords are securely hashed with **bcrypt** before being stored in MongoDB.

It is deployed live on **Vercel** and serves as a clean, minimal foundation for any full-stack project that requires user authentication.

> 💡 This project was built to master the fundamentals of full-stack authentication — form handling, password hashing, session management, and server-rendered views — before moving on to React-based frontends.

---

## ✨ Features

- ✅ **User Registration** — Create a new account with name, email, and password
- ✅ **User Login** — Authenticate with email and password
- ✅ **Password Hashing** — Passwords securely stored using `bcrypt`
- ✅ **Server-Side Rendering** — All pages rendered by the server using EJS templates
- ✅ **MongoDB Integration** — User data persisted with Mongoose
- ✅ **Protected Pages** — Logged-in users access a welcome/dashboard view
- ✅ **Responsive UI** — Clean, styled with custom CSS
- ✅ **Static Assets** — Served via Express static middleware from `public/`
- ✅ **Deployed on Vercel** — Live and publicly accessible

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js v5 |
| **Database** | MongoDB via Mongoose |
| **Templating** | EJS (Embedded JavaScript) |
| **Password Security** | bcrypt |
| **Path Handling** | path (Node built-in + npm) |
| **Dev Tool** | Nodemon |
| **Frontend** | HTML5, CSS3 (custom) |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
Simple_login-Register-full-stack-/
│
├── public/               # Static assets served to the browser
│   └── css/
│       └── style.css     # Custom stylesheet
│
├── src/                  # Core server-side source code
│   ├── db/
│   │   └── connection.js # MongoDB connection setup
│   ├── models/
│   │   └── userModel.js  # Mongoose user schema (name, email, password)
│   ├── controllers/
│   │   └── authController.js  # Register & login business logic
│   └── routes/
│       └── authRoutes.js # Express routes for auth pages
│
├── views/                # EJS templates rendered by Express
│   ├── index.ejs         # Home / landing page
│   ├── login.ejs         # Login form page
│   ├── register.ejs      # Registration form page
│   └── welcome.ejs       # Post-login welcome/dashboard page
│
├── index.js              # Main application entry point
├── package.json          # Project metadata & dependencies
├── .gitignore            # Files excluded from version control
├── .env                  # Environment variables (not committed)
└── README.md             # Project documentation
```

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18` or higher
- [npm](https://www.npmjs.com/) `v9` or higher
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mohamed-hashem182005/Simple_login-Register-full-stack-
```

### 2. Navigate into the project directory

```bash
cd Simple_login-Register-full-stack-
```

### 3. Install all dependencies

```bash
npm install
```

### 4. Set up environment variables

Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables) below).

### 5. Start the development server

```bash
npx nodemon index.js
```

The app will be running at **http://localhost:3000**

---

## 🔐 Environment Variables

Create a `.env` file in the root of your project:

```env
PORT=3000
MONGODB_URI="URL EXAMPLE IN MONGODB"
```

| Variable | Description | Example |
|---|---|---|
| `PORT` | Port the server listens on | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |

> ⚠️ **Never commit your `.env` file to version control.** It is already included in `.gitignore`.

---

## 🗺 Pages & Routes

| Method | Route | View Rendered | Description |
|---|---|---|---|
| `GET` | `/` | `index.ejs` | Home / landing page |
| `GET` | `/register` | `register.ejs` | Registration form |
| `POST` | `/register` | Redirect to `/login` | Handles registration form submission |
| `GET` | `/login` | `login.ejs` | Login form |
| `POST` | `/login` | Redirect to `/welcome` | Handles login form submission |
| `GET` | `/welcome` | `welcome.ejs` | Welcome / dashboard page (after login) |

---

## ⚙️ How It Works

### Registration Flow
```
User fills Register Form
        │
        ▼
POST /register
        │
        ▼
Validate input fields
        │
        ▼
Hash password with bcrypt
        │
        ▼
Save new user to MongoDB
        │
        ▼
Redirect to /login
```

### Login Flow
```
User fills Login Form
        │
        ▼
POST /login
        │
        ▼
Find user by email in MongoDB
        │
        ▼
Compare password with bcrypt.compare()
        │
   ┌────┴────┐
   ✅ Match   ❌ No Match
   │          │
   ▼          ▼
Redirect   Show error
to /welcome  message
```

---

## 🗺 Roadmap

- [ ] 🔑 Add session management (express-session) to persist login state
- [ ] 🚪 Add logout functionality
- [ ] 🛡 Add route protection middleware (redirect guests from `/welcome`)
- [ ] ✉️ Add email validation on registration
- [ ] 🔔 Add flash messages for success/error feedback
- [ ] 🎨 Improve UI with Bootstrap or Tailwind CSS
- [ ] ⚛️ Migrate frontend to React.js (next step)
- [ ] 🧪 Add unit tests

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request** and describe your changes

---

## 📄 License

This project is licensed under the **MIT License**.


---

## 👨‍💻 Author

**Mohamed Hashem**

- GitHub: [@mohamed-hashem182005](https://github.com/mohamed-hashem182005)
- Live Demo: [simple-login-register-full-stack.vercel.app](https://simple-login-register-full-stack.vercel.app)

---

<div align="center">

⭐ **If you find this project helpful, please give it a star!** ⭐

*Built with ❤️ as part of a full-stack Node.js development journey.*

</div>
