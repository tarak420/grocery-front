// ProductsPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/product/productSlice';
import { addProductToCart } from '../../features/cart/cartSlice';
import Header from '../shared/Header';
import { Link, useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, status, error } = useSelector((state) => state.products);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    const item = {
      productId: product._id, // Assume product has an id
      name: product.name,
      price: product.price,
      quantity: 1, // Set the quantity to 1 by default
      image: product.productImage,
    };

    dispatch(addProductToCart(item));
  };

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
        <Header />
        <section className="products mt-5 pt-[7rem]">
            <h1 className="heading">Our <span>Products</span></h1>
            <div className="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products && products.map((item, idx) => (
                <div onClick={()=>navigate('/products/'+item?._id)} className="product-card border p-4 rounded-lg shadow-lg" key={idx}>
                    <img src={item.productImage} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                    <h2 className="mt-2 text-lg font-semibold">{item.name}</h2> {/* Use item.name for dynamic product names */}
                    <div className="price mt-1 text-xl font-bold">${item.price}</div>
                    <div className="stars mt-1">⭐⭐⭐⭐⭐</div>
                    <button className="btn mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
                ))}
            </div>
        </section>
    </div>
  );
};

export default ProductsPage;
