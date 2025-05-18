# Authentication System README

## Overview

The system provides a foundational implementation of authentication using:

- **User  Signup**
- **User  Signin**
- **JWT Token Generation and Storage** (in localStorage)
- **Access to Protected Routes** (`/me`)
- **Logout with Session Handling**

## How It Works

### User Signup

- Users register using a username and password.
- These credentials are securely stored on the server.

### User Signin

- Upon successful login, a JWT token is issued and stored in localStorage.

### Protected Route

- The `/me` endpoint requires the token to return user information.

### Logout

- Users can log out, which deletes the session on the server and clears user data.

## Repository Structure
```perl
├── index.html          # Frontend UI
├── script.js           # Frontend logic using Axios for HTTP requests
├── index.js            # Backend server handling routes (signup, signin, /me, logout)
├── package.json        # Node.js dependencies and scripts
├── package-lock.json   # Exact dependency tree for reproducibility
```

## Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/auth-system.git
   cd auth-system
   ```

2. **Install Dependencies**
- Ensure you have Node.js installed, then run:
  ```bash
  npm install
  ```

## Usage

### Start the Backend Server
  ```bash
  node index.js
  ```
- The server will be running at: http://localhost:3000

### Access the Frontend
- Open index.html directly in your browser, or serve it using a tool like Live Server in VSCode.

  ## 🔧 Available Routes

| Method | Route     | Description                  |
|--------|-----------|------------------------------|
| POST   | /signup   | Register a new user          |
| POST   | /signin   | Authenticate and get token   |
| GET    | /me       | Get current user info        |
| POST   | /logout   | Logout user session          |

## 📦 Dependencies

- express  
- jsonwebtoken  
- body-parser  
- cors  
- nodemon (dev)

---

## 📃 License

MIT License — use it freely and build on top!
