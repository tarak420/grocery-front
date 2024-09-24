import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, User, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice'; // Logout action from the auth slice
import LoginForm from '../HomeTest/LoginForm';
import SearchComp from '../HomeTest/Search';
import Cart from '../HomeTest/Cart';

const Header = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.auth.user); // Access the user from Redux state

  const toggleComponent = (component) => {
    if (activeComponent === component) {
      setActiveComponent(''); // Close if already open
    } else {
      setActiveComponent(component); // Open the new component
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setActiveComponent(''); // Close the profile dropdown
  };

  return (
    <>
      <header className="header fixed top-0 z-50 w-full flex justify-between items-center p-4 shadow-lg bg-white">
        {/* Logo */}
        <Link to="#" className="logo flex gap-2 items-center text-xl font-bold">
          <ShoppingBag className="logoIcon text-green-700" />
          <span className="text-[#342d71]">Grocery</span>
        </Link>

        {/* Navigation Links */}
        <nav
          className={`navbar ${activeComponent === 'menu' ? 'block active z-20' : 'hidden'} md:flex md:space-x-6 absolute md:static w-full bg-white md:w-auto p-4 md:p-0`}
        >
          <Link className="link block p-4 md:p-0" to="/">Home</Link>
          <Link className="link block p-4 md:p-0" to="#features">Features</Link>
          <Link className="link block p-4 md:p-0" to="/products">Products</Link>
          <Link className="link block p-4 md:p-0" to="#categories">Categories</Link>
          <Link className="link block p-4 md:p-0" to="#review">Review</Link>
          <Link className="link block p-4 md:p-0" to="#blogs">Blogs</Link>
        </nav>

        {/* Icons for Search, Cart, Login/Profile */}
        <div className="icons flex gap-3">
          <Menu className="icon md:hidden block cursor-pointer" onClick={() => toggleComponent('menu')} />
          <Search className="icon cursor-pointer" onClick={() => toggleComponent('search')} />
          <ShoppingCart className="icon cursor-pointer" onClick={() => toggleComponent('cart')} />

          {/* If user is logged in, show profile link; else, show login icon */}
          {user ? (
            <Link to="/profile" className="icon cursor-pointer">
              <User />
            </Link>
          ) : (
            <User className="icon cursor-pointer" onClick={() => toggleComponent('login')} />
          )}
        </div>
      </header>

      {/* Render Search, Cart, and Login Form components */}
      <SearchComp isOpen={activeComponent === 'search'} toggleSearch={() => toggleComponent('search')} />
      <Cart isOpen={activeComponent === 'cart'} toggleCart={() => toggleComponent('cart')} />
      
      {/* Show LoginForm only if the user is not logged in */}
      {!user && (
        <LoginForm isOpen={activeComponent === 'login'} toggleLogin={() => toggleComponent('login')} />
      )}
    </>
  );
};

export default Header;
