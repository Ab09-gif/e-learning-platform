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