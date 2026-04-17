Got it — here is the **complete single-block Markdown file** (no breaks, no interruptions, easy copy/paste into GitHub README.md):

```markdown
# 🚀 Stage 1 API Deployment (HNG DevOps Task)

## 📌 Project Overview

This project is a simple REST API built with **Node.js (Express)** and deployed on a **Linux VPS (EC2)** using **Nginx as a reverse proxy** and **PM2 for process management**.

The goal of this project is to demonstrate backend development and production deployment skills, including:

- Building a REST API
- Deploying on a Linux server
- Configuring Nginx as a reverse proxy
- Managing Node.js processes with PM2
- Serving secure HTTPS traffic with SSL

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- Nginx
- PM2
- Ubuntu Server (EC2)
- Let’s Encrypt SSL
- DuckDNS Domain

---

## 📂 Project Structure

```

stage1-api/
│
├── index.js
├── routes/
│   └── api.js
├── package.json
└── README.md

````

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/stage1-api.git
cd stage1-api
````

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start the server

```bash
node index.js
```

The server will run on:

```
http://localhost:3000
```

---

## 🌐 API Endpoints

### 1. Home Route

**Request:**

```
GET /
```

**Response:**

```json
{
  "message": "API is running"
}
```

---

### 2. Health Check

**Request:**

```
GET /health
```

**Response:**

```json
{
  "message": "healthy"
}
```

---

### 3. User Info

**Request:**

```
GET /me
```

**Response:**

```json
{
  "name": "Nwoke Ghandi Robert",
  "email": "robertzerah@gmail.com",
  "github": "https://github.com/robertGhandi/"
}
```

---

## 🌍 Live Deployment

### 🔗 Base URL

```
https://ghandi-devops.duckdns.org
```

---

### 📡 Live Endpoints

* Home → [https://ghandi-devops.duckdns.org/](https://ghandi-devops.duckdns.org/)
* Health → [https://ghandi-devops.duckdns.org/health](https://ghandi-devops.duckdns.org/health)
* Me → [https://ghandi-devops.duckdns.org/me](https://ghandi-devops.duckdns.org/me)

---

## ⚙️ Deployment Architecture

```
Client Request
      ↓
Nginx (Reverse Proxy)
      ↓
Node.js Application (PM2)
      ↓
JSON Response
```

---

## 🧠 Key Learnings

* Linux server provisioning and configuration
* Nginx reverse proxy setup
* SSL configuration using Certbot
* Process management using PM2
* Deploying production-ready APIs

---

## 👨‍💻 Author

**Nwoke Ghandi Robert**

* GitHub: [https://github.com/robertGhandi/](https://github.com/robertGhandi/)

---

## ✅ Status

* ✔ Deployed and live
* ✔ HTTPS enabled
* ✔ Production-ready API
* ✔ HNG Stage 1 Completed

