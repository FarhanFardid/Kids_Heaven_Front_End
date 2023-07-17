import useTitle from "../Hooks/useTitle";
import AboutUs from "./AboutUs";
import CategoryTab from "./CategoryTab";
import Dinosaurs from "./Dinosaurs";

import Gallery from "./Gallery";
import Review from "./Review";
import Slider from "./Slider";


const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <Gallery></Gallery>
            <Dinosaurs></Dinosaurs>
            <CategoryTab></CategoryTab>
            <AboutUs></AboutUs>
            <Review></Review>
            
        </div>
    );
};

export default Home;