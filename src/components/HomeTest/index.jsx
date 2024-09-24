
import Features from "./Features";
import Footer from "./Footer";
import Banner from "./Banner";
import ProductCategory from "./ProductCategory";
import ProductSlider from "./ProductSection";
import ReviewSection from "./ReviewSection";
import "./style.css"

const HomeTest = ()=>{

    return(
         <div>
             <Banner />
             <Features/>
             <ProductSlider/>
             <ProductCategory/>
             <ReviewSection/>
             <Footer/>
         </div>
    );
}

export default HomeTest;