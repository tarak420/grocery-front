import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>Grocery <i class="fa fa-shopping-basket"></i></h3>
                <p>Feel Free Follow Us On Our Social Media Handlers All The Links Are Given Below</p>

                <div class="share">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-instagram"></i>
                    <i class="fa fa-linkedin"></i>
                </div>
            </div>

            <div class="box">
                <h3>Contact Info</h3>
                <a href="#" class="links"><i class="fa fa-phone"></i> +880 1790798183</a>
                <a href="#" class="links"><i class="fa fa-envelope"></i> tarekhassan@gmail.com</a>
                <a href="#" class="links"><i class="fa fa-map-marker"></i> Mirpur-6, Dhaka</a>
            </div>

            <div class="box">
                <h3>Quick Links</h3>
                <a href="#" class="links"><i class="fa fa-arrow-right"></i>Home</a>
                <a href="#" class="links"><i class="fa fa-arrow-right"></i>Features</a>
                <a href="#" class="links"><i class="fa fa-arrow-right"></i>Products</a>
                <a href="#" class="links"><i class="fa fa-arrow-right"></i>Categories</a>
                <a href="#" class="links"><i class="fa fa-arrow-right"></i>Review</a>
                <a href="#" class="links"><i class="fa fa-arrow-right"></i>Blogs</a>
            </div>


            <div class="box">
                <h3>Newsletter</h3>
                <p>Subscribe For Latest Updates</p>
                <input type="email" placeholder="your email" class="email"/>
                <input type="submit" value="Subscribe" class="btn"/>
                <img src="image/payment.png" class="payment-img"/>
            </div>
        </div>

        <div class="credit">Copyright All Rights Reserved@2024</div>
    </section>
    
  );
};

export default Footer;
