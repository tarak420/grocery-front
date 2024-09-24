import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../features/product/productSlice';
import { useParams } from 'react-router-dom';
import Header from '../shared/Header';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productId = id;

  const selectedProduct = useSelector((state) => state.products.selectedProduct);
  const { status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (status === 'loading') {
    return <div className="text-center text-lg mt-10">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-red-500 text-lg mt-10">Error: {error}</div>;
  }

  if (!selectedProduct) {
    return <div className="text-center text-gray-500 text-lg mt-10">No product found.</div>;
  }

  return (
   <div>
      <Header/>
      <div className="max-w-7xl mx-auto px-4 py-12 pt-[16em]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="product-image flex justify-center">
            <img
              src={selectedProduct.productImage}
              alt={selectedProduct.name}
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>

          {/* Product Details */}
          <div className="product-details space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{selectedProduct.name}</h1>
            <p className="text-lg text-gray-600">{selectedProduct.description}</p>
            <p className="text-3xl font-semibold text-blue-600">${selectedProduct.price}</p>

            {/* Additional Info (You can add more details here) */}
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-gray-800">Product Specifications:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {/* <li>Weight: {selectedProduct.weight} kg</li> */}
                <li>Category: {selectedProduct.category}</li>
                <li>Stock Status: {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}</li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg">
            Buy Now
            </button>
          </div>
        </div>

        {/* You can add a related products section or reviews below */}
        <div className="related-products mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          {/* Related products carousel/grid can be implemented here */}
        </div>
      </div>
   </div>
  );
};

export default ProductDetails;
