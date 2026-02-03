# e-learning-platform

This project is an e-learning platform built using React for the frontend and Express with MongoDB for the backend. It allows users to sign up and log in to access various courses, including C, C++, HTML, and JavaScript. Each course provides options for notes, e-notes, and videos.

## Project Structure

```
e-learning-platform
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── auth
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── courses
│   │   │   │   ├── CourseCard.jsx
│   │   │   │   ├── CourseList.jsx
│   │   │   │   └── CourseDetail.jsx
│   │   │   ├── layout
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── common
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Courses.jsx
│   │   │   └── Profile.jsx
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   ├── styles
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── tailwind.config.js
├── server
│   ├── src
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   └── courseController.js
│   │   ├── models
│   │   │   ├── User.js
│   │   │   └── Course.js
│   │   ├── routes
│   │   │   ├── auth.js
│   │   │   └── courses.js
│   │   ├── middleware
│   │   │   └── auth.js
│   │   ├── config
│   │   │   └── db.js
│   │   └── app.js
│   └── package.json
└── README.md
```

## Getting Started

1. Clone the repository.
2. Navigate to the `client` directory and run:
   ```bash
   npm install
   npm start
   ```
3. Navigate to the `server` directory and run:
   ```bash
   npm install
   npm start
   ```
4. Ensure that MongoDB is running for the backend to connect successfully.

## Features

- User authentication (sign up and log in)
- Course listing and details
- Options for notes, e-notes, and videos for each course

## Technologies Used

- Frontend: React, Tailwind CSS, JavaScript
- Backend: Express, MongoDB

## License

This project is licensed under the MIT License.