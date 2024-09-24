import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: '/image/product-1.png',
    name: 'Fresh Orange',
    price: '$12.99 -- $15.99',
  },
  {
    id: 2,
    image: '/image/product-2.png',
    name: 'Fresh Apple',
    price: '$10.99 -- $13.99',
  },
  {
    id: 3,
    image: '/image/product-3.png',
    name: 'Fresh Banana',
    price: '$9.99 -- $11.99',
  },
  {
    id: 4,
    image: '/image/product-4.png',
    name: 'Fresh Grapes',
    price: '$14.99 -- $17.99',
  },
  {
    id: 5,
    image: '/image/product-5.png',
    name: 'Fresh Mango',
    price: '$16.99 -- $19.99',
  }
  // Add more products as needed
];

const ProductSection = () => {
  return (
    <section class="products">
        <h1 className='heading'>Our <span>Products</span></h1>
        <div class="products-container">
            <div class="product-card">
                <img src="image/product-1.png" alt="Product 1"/>
                <h2>Fresh Orange</h2>
                <div class="price">$12.99 - $15.99</div>
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <a href="#" class="btn">Add to Cart</a>
            </div>
            <div class="product-card">
                <img src="image/product-2.png" alt="Product 2"/>
                <h2>Fresh Orange</h2>
                <div class="price">$12.99 - $15.99</div>
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <a href="#" class="btn">Add to Cart</a>
            </div>
            <div class="product-card">
                <img src="image/product-3.png" alt="Product 3"/>
                <h2>Fresh Orange</h2>
                <div class="price">$12.99 - $15.99</div>
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <a href="#" class="btn">Add to Cart</a>
            </div>
            <div class="product-card">
                <img src="image/product-4.png" alt="Product 4"/>
                <h2>Fresh Orange</h2>
                <div class="price">$12.99 - $15.99</div>
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <a href="#" class="btn">Add to Cart</a>
            </div>
        </div>
    </section>

  );
};

export default ProductSection;
