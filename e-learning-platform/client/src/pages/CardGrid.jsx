import React from 'react';
import { FaCode, FaGlobe, FaCubes } from "react-icons/fa";

const categories = [
  {
    title: "Programming",
    desc: "Learn C, C++, and more",
    icon: <FaCode className="text-2xl text-white" />,
    tooltip: "Coding Fundamentals",
  },
  {
    title: "Web Development",
    desc: "Master HTML, CSS, and JavaScript",
    icon: <FaGlobe className="text-2xl text-white" />,
    tooltip: "Frontend & Backend",
  },
  {
    title: "Data Structures",
    desc: "Advanced programming concepts",
    icon: <FaCubes className="text-2xl text-white" />,
    tooltip: "DSA & Algorithms",
  },
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-20 px-4 sm:px-6 lg:px-8">
      {categories.map((card, index) => (
        <div
          key={index}
          className="group relative bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 border border-white/10 hover:border-white/30 transition-all"
        >
          <div className="group-hover:animate-float">
            <div className="absolute top-4 right-4">
              <div className="relative group">
                <div className="tooltip group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded py-1 px-2 absolute right-0 bottom-full mb-1 opacity-0">
                  {card.tooltip}
                </div>
                {card.icon}
              </div>
            </div>
            <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {card.title}
            </h2>
            <p className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}