import React from 'react';

const Cart = ({ isOpen, toggleCart }) => {
  if (!isOpen) return null; // Don't render the cart if it's closed

  return (
    <div className="cart-overlay fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end z-50">
      <div className="cart bg-white p-4 pt-[13em] w-80 shadow-xl h-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
        <div className="cart-items">
          {/* Map through the cart items */}
          <p>No items in cart</p>
        </div>
        <button
          onClick={toggleCart}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
