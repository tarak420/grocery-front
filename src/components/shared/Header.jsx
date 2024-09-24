import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, User, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginForm from '../HomeTest/LoginForm';
import SearchComp from '../HomeTest/Search';
import Cart from '../HomeTest/Cart';

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false); // For login form

  const toggleSearch = () => setSearchOpen(!isSearchOpen);
  const toggleCart = () => setCartOpen(!isCartOpen);
  const toggleLogin = () => setLoginOpen(!isLoginOpen); // Toggle login form

  return (
    <>
      <header className="header flex justify-between items-center p-4 shadow-lg">
        <Link to="#" className="logo flex gap-2 items-center">
          <ShoppingBag className="logoIcon" /> <span>Grocery</span>
        </Link>

        <nav className="navbar">
          <Link className="link" to="#home">Home</Link>
          <Link className="link" to="#features">Features</Link>
          <Link className="link" to="#products">Products</Link>
          <Link className="link" to="#categories">Categories</Link>
          <Link className="link" to="#review">Review</Link>
          <Link className="link" to="#blogs">Blogs</Link>
        </nav>

        <div className="icons flex gap-3">
          <Menu id="menu-btn" className="icon" />
          <Search id="search-btn" className="icon" onClick={toggleSearch} />
          <ShoppingCart id="cart-btn" className="icon" onClick={toggleCart} />
          <User id="login-btn" className="icon" onClick={toggleLogin} /> {/* Toggle login form */}
        </div>
      </header>

      {/* Render Search, Cart, and Login Form components */}
      <SearchComp isOpen={isSearchOpen} toggleSearch={toggleSearch} />
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      <LoginForm isOpen={isLoginOpen} toggleLogin={toggleLogin} />
    </>
  );
};

export default Header;
