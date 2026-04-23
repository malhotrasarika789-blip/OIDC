Custom OIDC Provider (Node.js)

This project is a basic implementation of an OpenID Connect (OIDC) Provider using Node.js and Express. It demonstrates authentication flow, token generation, and basic OIDC endpoints.

<img width="1920" height="1020" alt="Screenshot 2026-04-23 195202" src="https://github.com/user-attachments/assets/45dc8d6e-a193-4d8b-9bca-736d15630bfd" />


 Features
 OpenID Connect authentication flow
 JWT Token generation
 User authentication (basic demo)
 Authorization & Token endpoints
 Lightweight Express server

Tech Stack
Node.js
Express.js
JSON Web Tokens (JWT)

 How It Works
User hits /authorize
Server authenticates user
Authorization code is generated
Code is exchanged at /token
JWT token is returned


Note

This is a basic/demo project for learning purposes.
Not recommended for production without security enhancements.

Future Improvements
Add database (MongoDB)
Implement refresh tokens
Add proper user authentication system
Improve security (PKCE, HTTPS, etc.)

Author

Sarika Malhotra
