import React, { useState, useEffect } from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/authService';
import CardGrid from './CardGrid';

const Home = ({ onLoginClick }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        setError('');
    };

    const handleSwitch = () => setIsLogin(!isLogin);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const formData = new FormData(e.target);
        const credentials = Object.fromEntries(formData.entries());

        try {
            if (isLogin) {
                const { token, user } = await loginUser(credentials);
                // Handle successful login
                handleClose();
                navigate('/dashboard');
            } else {
                if (credentials.password !== credentials.cpassword) {
                    throw new Error('Passwords do not match');
                }
                await registerUser(credentials);
                // Switch to login after successful registration
                setIsLogin(true);
                setError('Registration successful! Please login.');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const backgroundStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/pexels-pixabay-289737.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    };

    return (
        <div className="relative min-h-[200vh] w-full overflow-y-auto scroll-smooth" style={backgroundStyle}>
            {/* Gradient overlay */}
            <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/30 backdrop-blur-[2px]"></div>
            
            {/* Main content */}
            <div className="relative z-20 flex flex-col items-center w-full">
                {/* Hero Section */}
                <div className="relative z-20 flex flex-col items-center justify-start pt-32 px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Welcome to the E-Learning Platform
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 text-white/90">
                            Explore a variety of courses and enhance your skills!
                        </p>
                        
                        <div className="space-x-6 inline-block">
                            <a href="/courses" 
                               className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg 
                                        hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 
                                        transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
                                View Courses
                            </a>
                            <button
                                onClick={onLoginClick}
                                className="inline-block bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-lg 
                                         hover:bg-white/10 hover:border-white backdrop-blur-sm transform hover:scale-105 
                                         transition-all duration-300 shadow-lg hover:shadow-white/30"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-32">
                    <CardGrid />
                </div>

                {/* Features Section */}
                <div className="mt-32 w-full max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Expert Instructors",
                                description: "Learn from industry professionals with years of experience",
                                icon: "👨‍🏫"
                            },
                            {
                                title: "Flexible Learning",
                                description: "Study at your own pace, anywhere, anytime",
                                icon: "⏰"
                            },
                            {
                                title: "Interactive Content",
                                description: "Engage with practical exercises and real-world projects",
                                icon: "💡"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-white/80">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="mt-32 w-full bg-white/5 backdrop-blur-sm py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: "10K+", label: "Students" },
                                { number: "200+", label: "Courses" },
                                { number: "50+", label: "Instructors" },
                                { number: "95%", label: "Success Rate" }
                            ].map((stat, index) => (
                                <div key={index} className="group">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                                        {stat.number}
                                    </div>
                                    <div className="text-white/80 mt-2">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-32 w-full max-w-3xl mx-auto px-4 mb-16">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Stay Updated
                        </h2>
                        <p className="text-white/80 text-center mb-6">
                            Subscribe to our newsletter for the latest courses and updates
                        </p>
                        <form className="flex gap-4 flex-col sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                            />
                            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Course Grid */}
                
            </div>

            {/* Login/Signup Modal */}
            {show && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg text-white rounded-2xl p-8 shadow-2xl transform scale-100 transition-all duration-300">
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-white hover:text-red-400 transition-transform transform hover:scale-125"
                        >
                            <IoClose size={24} />
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-center">
                            {isLogin ? 'Login' : 'Signup'}
                        </h2>

                        {error && (
                            <div className="mb-4 p-3 rounded bg-red-500/20 border border-red-500 text-red-100 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!isLogin && (
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Username"
                                    className="w-full px-4 py-2 bg-white/20 rounded-lg focus:outline-none"
                                    required
                                />
                            )}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 bg-white/20 rounded-lg focus:outline-none"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 bg-white/20 rounded-lg focus:outline-none"
                                required
                            />
                            {!isLogin && (
                                <input
                                    type="password"
                                    name="cpassword"
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-2 bg-white/20 rounded-lg focus:outline-none"
                                    required
                                />
                            )}

                            {isLogin && (
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" />
                                        Remember Me
                                    </label>
                                    <span className="text-blue-300 cursor-pointer hover:underline">
                                        Forgot Password?
                                    </span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 
                                         hover:from-cyan-600 hover:to-blue-600 font-semibold
                                         disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Processing...' : (isLogin ? 'Login' : 'Signup')}
                            </button>
                        </form>

                        {/* Switch Link */}
                        <div
                            onClick={handleSwitch}
                            className="mt-4 text-sm text-center text-blue-300 cursor-pointer hover:underline"
                        >
                            {isLogin ? 'Register here' : 'Already have an account? Login'}
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center gap-6 mt-6 text-xl">
                            <FaGoogle className="cursor-pointer hover:text-red-400 transition" />
                            <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />
                            <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;