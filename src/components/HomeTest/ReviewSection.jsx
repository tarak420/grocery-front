import React from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Great service and fresh products. Highly recommend!',
    rating: 5,
    image: 'image/pic-1.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Excellent quality, timely delivery!',
    rating: 4,
    image: 'image/pic-2.png',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    review: 'I love the variety of products available.',
    rating: 4,
    image: 'image/pic-3.png',
  },
];

const ReviewSection = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Adds dots for navigation
    infinite: true, // Loops the slider
    speed: 500, // Animation speed
    slidesToShow: 1, // Shows 1 slide at a time
    slidesToScroll: 1, // Scrolls 1 slide at a time
    autoplay: true, // Auto-scrolls the slider
    autoplaySpeed: 3000, // Autoplay speed (in ms)
  };

  return (
    <section className="py-12 " id="reviews">
       <h1 className='heading'>Our <span>Products</span></h1>

      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4 max-w-md mx-auto">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-gray-600">{review.review}</p>
              <div className="flex justify-center">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={index} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ReviewSection;
