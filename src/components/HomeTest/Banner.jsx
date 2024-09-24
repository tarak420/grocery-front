import { Link } from 'react-router-dom';


const Banner = () => {
    return (
      <section className="home" id="home">
        <div className="content">
          <h3>Fresh And <span>Organic</span> Products For You</h3>
          <p>Embrace the purity of nature with our organic products. Nourish your body and mind with sustainable, chemical-free goodness."</p>
          <Link to="#" className="btn">Shop Now</Link>
        </div>
      </section>
    );
  };
  
  export default Banner;
  