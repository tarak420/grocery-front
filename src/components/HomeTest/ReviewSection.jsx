import { Star } from 'lucide-react';

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
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">Customer <span>Reviews</span></h1>
      <div className="review-container">
        {reviews.map(review => (
          <div key={review.id} className="review-box">
            <img src={review.image} alt={review.name} />
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <div className="rating">
              {[...Array(review.rating)].map((_, index) => (
                <Star key={index} className="star-icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
