import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart, removeProductFromCart, updateProductQuantity } from '../../features/cart/cartSlice';

const Cart = ({ isOpen, toggleCart }) => {
  const dispatch = useDispatch();
  const { cart, status, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  // Handle removing a product from the cart
  const handleRemove = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  // Handle updating the quantity of a product
  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return; // Prevent negative quantity
    dispatch(updateProductQuantity({ productId, quantity }));
  };

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle proceeding to order
  const handleProceedToOrder = () => {
    // Implement your order processing logic here (e.g., redirect to checkout page)
    console.log('Proceeding to order...');
    // Optionally, close the cart after proceeding
    toggleCart();
  };

  if (!isOpen) return null; // Don't render the cart if it's closed

  return (
    <div className="w-[53vw]  fixed top-0 right-0 w-full h-full  flex justify-end z-50">
      <div className="cart bg-white p-4 pt-24 w-[50vw] shadow-xl h-full overflow-y-auto relative">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {/* Error and Loading States */}
        {status === 'loading' && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Cart Items */}
        <div className="cart-items space-y-4">
          {cart && cart.length > 0 ? (
            cart.map((item, idx) => (
              <div
                key={idx}
                className="cart-item flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <div className="item-info flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center">
                      <button onClick={() => handleQuantityChange(item.productId, item.quantity - 1)} className="text-gray-600">-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.productId, item.quantity + 1)} className="text-gray-600">+</button>
                    </div>
                    <p className="text-gray-800 font-semibold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.productId)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No items in the cart.</p>
          )}
        </div>

        {/* Total Amount */}
        {cart.length > 0 && (
          <div className="total-amount flex justify-between mt-4 font-semibold">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        )}

        {/* Proceed to Order Button */}
        {cart.length > 0 && (
          <button
            onClick={handleProceedToOrder}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg w-full"
          >
            Proceed to Order
          </button>
        )}

        {/* Close Button */}
        <button
          onClick={toggleCart}
          className="mt-2 bg-red-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
