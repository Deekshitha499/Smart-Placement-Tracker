# ⚙️ Smart Placement Tracker - Backend

Backend API for Smart Placement Tracker developed using Node.js, Express.js and MongoDB.

Provides authentication, ATS resume analysis, placement management APIs, and student application handling.

---

# 🚀 Features

- JWT Authentication
- Student & TPO APIs
- MongoDB Database Integration
- ATS Resume Checker API
- Resume Upload Handling
- Application Management APIs
- Placement Drive APIs
- Company Management APIs

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- PDF-Parse
- dotenv

---

# 📂 Folder Structure

```bash
Backend/
│
├── models/
├── routes/
├── middleware/
├── uploads/
├── server.js
└── .env
```

---

# ⚙️ Installation

# 1️⃣ Install Dependencies

```bash
npm install
```

---

# 2️⃣ Create .env File

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 3️⃣ Start Backend

```bash
npm start
```

OR

```bash
nodemon server.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔐 Authentication

Uses JWT Authentication for:

- Student Login
- TPO Login
- Protected Routes

---

# 📄 ATS Resume Checker

Features:

- Resume PDF Upload
- Skill Extraction
- ATS Score Generation
- Missing Skills Detection
- Suggestions Generator

---

# 📌 API Modules

# Auth APIs

- Register User
- Login User

---

# ATS APIs

- Upload Resume
- Analyze Resume
- Generate ATS Score

---

# Companies APIs

- Add Company
- Update Company
- Delete Company

---

# Students APIs

- Add Student
- Edit Student
- Delete Student

---

# Applications APIs

- Track Applications
- Update Status

---

# 🔥 Future Enhancements

- AI Resume Analyzer
- Email Notifications
- Socket.io Integration
- Recruiter Portal
- AI Mock Interviews

---

# 👩‍💻 Developed By

Deekshitha Gorugantala