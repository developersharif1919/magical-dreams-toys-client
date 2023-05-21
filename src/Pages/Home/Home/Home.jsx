import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Newsletter from "../Newsletter/Newsletter";
import Carousel from "../Carousel/Carousel";
import ClientSay from "../ClientSay/ClientSay";
import GallerySection from "../GalarySection/GallerySection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    useEffect(() => {
        document.title = "MDT | Home";
        AOS.init(); // Initialize AOS
        AOS.refresh(); // Refresh AOS when the content changes dynamically
    }, []);
    return (
        <div>
            <Carousel data-aos="fade-up" />
            <GallerySection data-aos="fade-up" />
            <ShopByCategory data-aos="fade-up" />
            <ClientSay data-aos="fade-up" />
            <Newsletter data-aos="fade-up" />
        </div>
    );
};

export default Home;