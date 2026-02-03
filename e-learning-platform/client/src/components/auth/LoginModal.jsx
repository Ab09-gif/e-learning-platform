import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../../services/authService';

const LoginModal = ({ show, onClose, isLogin, onSwitch }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData.entries());

    try {
      if (isLogin) {
        const { token, user } = await loginUser(credentials);
        login(user);
        onClose();
        navigate('/dashboard');
      } else {
        if (credentials.password !== credentials.cpassword) {
          throw new Error('Passwords do not match');
        }
        await registerUser(credentials);
        setError('Registration successful! Please login.');
        onSwitch();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    show && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg text-white rounded-2xl p-8 shadow-2xl transform scale-100 transition-all duration-300">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-red-400 transition-transform transform hover:scale-125"
          >
            <IoClose size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? 'Login' : 'Signup'}
          </h2>

          {error && <p className="text-red-400 text-center mb-4">{error}</p>}

          <form method="post" action={isLogin ? 'login' : 'signup'} className="space-y-4" onSubmit={handleSubmit}>
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
              className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-semibold transition-all"
              disabled={loading}
            >
              {loading ? 'Please wait...' : isLogin ? 'Login' : 'Signup'}
            </button>
          </form>

          <div
            onClick={onSwitch}
            className="mt-4 text-sm text-center text-blue-300 cursor-pointer hover:underline"
          >
            {isLogin ? 'Register here' : 'Already have an account? Login'}
          </div>

          <div className="flex justify-center gap-6 mt-6 text-xl">
            <FaGoogle className="cursor-pointer hover:text-red-400 transition" />
            <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />
            <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />
          </div>
        </div>
      </div>
    )
  );
};

export default LoginModal;