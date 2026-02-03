import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'C Programming',
    category: 'Programming',
    description: 'Learn C programming from basics to advanced',
    options: [
      { type: 'notes', url: 'https://tite.ac.in/assets/frontend/pdf/lecture-notes/btech/2ndsem/c-programming.pdf' },
      { type: 'e-notes', url: 'https://www.tutorialspoint.com/cprogramming/cprogramming_tutorial.pdf' },
      { type: 'video', url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR' }
    ]
  },
  {
    id: 2,
    title: 'C++',
    category: 'Programming',
    description: 'Master Object Oriented Programming with C++',
    options: [
      { type: 'notes', url: 'https://www.tutorialspoint.com/cplusplus/cpp_tutorial.pdf' },
      { type: 'e-notes', url: 'https://www.geeksforgeeks.org/cpp-tutorial/' },
      { type: 'video', url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL' }
    ]
  },
  {
    id: 3,
    title: 'HTML & CSS',
    category: 'Web Development',
    description: 'Learn modern web development fundamentals',
    options: [
      { type: 'notes', url: 'https://www.tutorialspoint.com/html5/html5_tutorial.pdf' },
      { type: 'e-notes', url: 'https://www.w3schools.com/html/default.asp' },
      { type: 'video', url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg' }
    ]
  }
];

function CourseList() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/pexels-pixabay-289737.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="min-h-screen relative" style={backgroundStyle}>
      {/* Add overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/30 backdrop-blur-[2px]"></div>
      
      {/* Content */}
      <div className="relative z-10 py-32 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Available Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map(course => (
            <div key={course.id} className="bg-white/10 backdrop-blur-md text-white rounded-lg shadow-lg p-6 border border-white/10 hover:border-white/30 transition-all">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <div className="space-y-2">
                {course.options.map(option => (
                  <a
                    key={option.type}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded hover:from-cyan-600 hover:to-blue-600 transition-all"
                  >
                    {option.type.charAt(0).toUpperCase() + option.type.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseList;