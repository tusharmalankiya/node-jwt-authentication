# Node.js Authentication System with JSON Web Token (JWT)

This is a basic authentication system built using Node.js, MongoDB, Mongoose, EJS, and JSON Web Token (JWT) for authentication.

![Screenshot1](/Screenshots/Screenshot1.png)
![Screenshot2](/Screenshots/Screenshot2.png)
![Screenshot3](/Screenshots/Screenshot3.png)



## Features

- User registration with email and password
- User login with email and password
- Authentication using JWT
- Protected routes for authenticated users
- Logout functionality
- Error handling for invalid login attempts and other errors

## Requirements

- Node.js installed on your machine
- MongoDB installed and running

## Installation

1. Clone the repository:

   ```bash
   https://github.com/tusharmalankiya/node-jwt-authentication.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-jwt-authentication
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and define the following environment variables:

   ```bash
   PORT=3000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_mongodb_uri` with your MongoDB connection URI and `your_jwt_secret` with a secret key for JWT.

5. Start the server:

   ```bash
   npm start
   ```

6. Access the application at http://localhost:3000 in your browser.

## Usage

1. Register a new user by providing an email and password.
2. Log in using the registered email and password.
3. Upon successful login, a JWT token is generated and stored as a secure HTTP cookie in the client's browser.
4. The token is automatically included in subsequent requests to protected routes via the cookie.
5. Access protected routes by sending requests with the stored JWT cookie.
6. Logout by clearing the JWT token stored in the client, which invalidates the session.

## Project Structure

```bash
node-jwt-authentication
│
├── README.md
├── .env
├── controllers
│   ├── authController.js
│   └── commonControllers.js
├── index.js
├── middleware
│   └── authMiddleware.js
├── models
│   └── User.js
├── package-lock.json
├── package.json
├── public
│   ├── Logo.jpg
│   └── style.css
├── routes
│   ├── authRoutes.js
│   └── commonRoutes.js
└── views
    ├── footer.ejs
    ├── header.ejs
    ├── home.ejs
    ├── login.ejs
    ├── protected.ejs
    └── signup.ejs

```
