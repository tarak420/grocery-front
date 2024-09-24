import React, { useState } from 'react';

const LoginForm = ({ isOpen, toggleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  if (!isOpen) return null; // Don't render the login form if it's closed

  return (
    <div className="login-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="login-form bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Login
          </button>
        </form>
        <button
          onClick={toggleLogin}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
