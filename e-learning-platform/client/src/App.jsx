import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CourseList from './components/courses/CourseList';
import CourseDetail from './components/courses/CourseDetail';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import LoginModal from './components/auth/LoginModal';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleSwitchMode = () => setIsLogin(!isLogin);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-900">
          {/* Fixed Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                    E-Learning
                  </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-6">
                  <Link to="/" className="text-white hover:text-blue-300 transition-colors">Home</Link>
                  <Link to="/courses" className="text-white hover:text-blue-300 transition-colors">Courses</Link>
                  <button
                    onClick={handleLoginClick}
                    className="bg-white/10 border border-white/30 text-white hover:bg-white/20 font-semibold py-2 px-5 rounded-lg transition duration-300"
                  >
                    {isLogin ? 'Login' : 'Signup'}
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Main content with padding for fixed nav */}
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home onLoginClick={handleLoginClick} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/courses/:id/:type" element={<CourseDetail />} />
            </Routes>
          </main>

          <Footer />

          <LoginModal 
            show={showLogin}
            onClose={handleCloseLogin}
            isLogin={isLogin}
            onSwitch={handleSwitchMode}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;