import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Left side - Brand */}
                <div className="text-2xl font-bold">
                    E-Learning Platform
                </div>

                {/* Right side - Navigation */}
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/courses" className="hover:underline">Courses</a></li>
                        <li><a href="/profile" className="hover:underline">Profile</a></li>
                        <li><a href="/login" className="hover:underline">Login</a></li>
                        <li><a href="/register" className="hover:underline">Register</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
