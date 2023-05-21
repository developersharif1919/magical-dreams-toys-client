import Newsletter from "../Newsletter/Newsletter";
import Carousel from "../Carousel/Carousel";
import ClientSay from "../ClientSay/ClientSay";
import GallerySection from "../GalarySection/GallerySection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "MDT | Home";
    }, []);
    return (
        <div>
            <Carousel></Carousel>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <ClientSay></ClientSay>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;