import Carousel from "../Carousel/Carousel";
import ClientSay from "../ClientSay/ClientSay";
import GallerySection from "../GalarySection/GallerySection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <ClientSay></ClientSay>
        </div>
    );
};

export default Home;