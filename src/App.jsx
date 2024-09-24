import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import CartPage from './pages/CartPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashBoard';
import AddProduct from './pages/admin/AddProduct';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import Navbar from './components/shared/Navbar';
import Header from './components/shared/Header';
import HomeTest from './components/HomeTest';

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Header />
      <div className='pt-5 mt-5 mx-auto px-4'>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomeTest />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          
          {/* Unauthorized route */}
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          {/* Protected routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute adminOnly={true}>
                <AddProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
