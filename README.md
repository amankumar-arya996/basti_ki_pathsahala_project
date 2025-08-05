My Basti Project - Full Stack Web App
📝 Project Overview
This is a basic full-stack web application built using Node.js, Express.js, and EJS for a volunteer/intern registration system. It includes:

A home page

A registration form for interns/volunteers

An admin panel to view all submitted applicants

Simple frontend styling with CSS

No database (uses in-memory storage)

🧱 Tech Stack
Backend: Node.js, Express.js

Frontend: HTML, CSS, EJS

Templating Engine: EJS

Storage: In-memory JavaScript array (no database)

🚀 Features
Clean and simple UI

Register as an intern or volunteer

Admin can view submitted registrations (password-protected)

Minimalistic styling using a custom CSS file

Server runs on port 3000

🖼️ Project Structure
pgsql
Copy
Edit
basti_ki_pathshala_project/
│
├── views/
│   ├── home.ejs
│   ├── register.ejs
│   ├── success.ejs
│   ├── admin.ejs
│   └── unauthorized.ejs
│
├── public/
│   └── style.css
│
├── index.js  (main server file)
└── package.json


🛠️ How to Run Locally
Clone the repository .

Make sure Node.js is installed.

Open terminal inside the project folder.

Run:

bash
Copy
Edit
npm install
node index.js
Open browser and go to:
http://localhost:3000

🔐 Admin Panel Access
To access the admin view:

Go to: http://localhost:3000/admin?password=admin123

You can change the password in the index.js file (look for ADMIN_PASSWORD).

👀 Live Demo
https://basti-ki-pathsahala-project.onrender.com/

🧠 What I Learned
Routing with Express

Handling form data using body-parser

Using EJS for rendering dynamic templates

Basic frontend-backend integration

Protecting admin routes with a query-based password

✍️ Author
Aman Kumar Arya
Aspiring Full Stack Developer