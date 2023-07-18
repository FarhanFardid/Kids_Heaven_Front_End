import useTitle from "../Hooks/useTitle";
import AboutUs from "./AboutUs";
import CategoryTab from "./CategoryTab";
import Dinosaurs from "./Dinosaurs";

import Gallery from "./Gallery";
import Info from "./Info";
import PopularToys from "./PopularToys";
import Review from "./Review";
import Slider from "./Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <Info></Info>
      <CategoryTab></CategoryTab>
      <PopularToys></PopularToys>
      <Dinosaurs></Dinosaurs>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <Review></Review>
    </div>
  );
};

export default Home;
