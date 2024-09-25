import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { login, register } from '../../features/auth/authSlice';

const LoginForm = ({ isOpen, toggleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true); // Toggle between login and signup forms
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const dispatch = useDispatch();
  const { status, error, user } = useSelector((state) => state.auth); // Access user from state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      // Dispatch login action
      dispatch(login({ email, password }));
    } else {
      // Dispatch register action
      dispatch(register({ name, email, password })).then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          setSuccessMessage('Registration successful! You can now log in.');
          setIsLoginMode(true); // Switch to login mode
        }
      });
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode); // Switch between login and signup
    setSuccessMessage(''); // Clear success message when toggling
  };

  useEffect(() => {
    if (error) {
      setSuccessMessage(''); // Clear success message on error
    }
  }, [error]);

  // Navigate based on user role (admin or regular user)
  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        navigate('/admin/dashboard'); // Redirect to admin dashboard if the user is an admin
      } else {
        navigate('/profile'); // Redirect to profile page if the user is a regular user
      }
    }
  }, [user, navigate]);

  if (!isOpen) return null; // Don't render the form if it's not open

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="login-form bg-white p-6 rounded-lg shadow-lg w-full sm:w-[35vw] md:w-[40vw]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold mb-4">
            {isLoginMode ? 'Login' : 'Sign Up'}
          </h2>
          <button
            onClick={toggleLogin}
            className="bg-red-500 text-white py-1 px-4 text-[18px] rounded-lg"
          >
            X
          </button>
        </div>

        {/* Show success message if applicable */}
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <div className="mb-4 text-xl">
              <label className="block mb-2 text-xl">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name..."
                className="w-full p-2 border-gray-500 rounded-lg"
              />
            </div>
          )}
          <div className="mb-4 text-xl">
            <label className="block mb-2 text-xl">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email..."
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4 text-xl">
            <label className="block mb-2 text-xl">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button type="submit" className="w-full text-xl bg-blue-500 text-white py-2 rounded-lg">
            {status === 'loading' ? 'Processing...' : isLoginMode ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle between Login and Sign Up */}
        <div className="text-center mt-4">
          <p className="text-xl">
            {isLoginMode ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button onClick={toggleMode} className="text-blue-500 underline">
              {isLoginMode ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
