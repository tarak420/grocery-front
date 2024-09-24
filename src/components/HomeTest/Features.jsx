import React from 'react';
import { CheckCircle, Truck, CreditCard, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section class="features" id="features">
        <h1 class="heading">our <span>features</span></h1>

        <div class="box-container">
            <div class="box">
                <img src="image/feature-img-1.png"/>
                <h3>Freash And Organic</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae</p>
                <a href="#" class="btn">Read More</a>
            </div>
            <div class="box">
                <img src="image/feature-img-2.png"/>
                <h3>Freash And Organic</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae</p>
                <a href="#" class="btn">Read More</a>
            </div>
            <div class="box">
                <img src="image/feature-img-3.png"/>
                <h3>Freash And Organic</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae</p>
                <a href="#" class="btn">Read More</a>
            </div>
        </div>
    </section>
  );
};

export default Features;
