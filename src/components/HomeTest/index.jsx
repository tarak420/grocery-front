
import Features from "./Features";
import Footer from "./Footer";
import Banner from "./Banner";
import ProductCategory from "./ProductCategory";
import ProductSlider from "./ProductSection";
import ReviewSection from "./ReviewSection";
import "./style.css"
import Header from "../shared/Header";
import { useEffect } from "react";
import { loadCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const HomeTest = ()=>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCart());
      }, [dispatch]);
    
  

    return(
        <div>
            <Header />
            <div className="pt-5 mt-5 mx-auto px-4">
                <Banner />
                <Features/>
                <ProductSlider/>
                <ProductCategory/>
                <ReviewSection/>
                <Footer/>
            </div>
        </div>
    );
}

export default HomeTest;