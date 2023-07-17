import useTitle from "../Hooks/useTitle";
import AboutUs from "./AboutUs";
import CategoryTab from "./CategoryTab";
import Dinosaurs from "./Dinosaurs";

import Gallery from "./Gallery";
import Info from "./Info";
import Review from "./Review";
import Slider from "./Slider";


const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <Info></Info>
            <Dinosaurs></Dinosaurs>
            <CategoryTab></CategoryTab>
            <AboutUs></AboutUs>
            <Gallery></Gallery>  
            <Review></Review>
            
        </div>
    );
};

export default Home;