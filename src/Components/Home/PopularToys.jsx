import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import bear from "../../assets/animals/Bear/bear-1.png";
import bear2 from "../../assets/animals/Bear/bear-2.png";
import lion from "../../assets/animals/Lion/lion-1.png";
import gal2 from "../../assets/animals/Gallary/galary-4.png";
import dinosaur from "../../assets/animals/Dinosaur/dino-3.png";
import Unicorn from "../../assets/animals/Unicorn/unicorn-2.png";
const PopularToys = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <div className="bg-purple-200 p-3">
      <h1 className="md:text-4xl text-lg text-center font-bold text-purple-900 md:py-4 py-1">
        Popular Toys
      </h1>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <>
            {" "}
            <p className="absolute top-3 text-red-600 text-2xl">Polar Bear</p>
            <img src={bear} alt="bear" />
          </>
        </div>
        <div className="keen-slider__slide number-slide2">
          <>
            {" "}
            <p className="absolute top-3 text-red-600 text-2xl">
              Trex Dinosaur
            </p>
            <img src={dinosaur} alt="dinosaur" />
          </>
        </div>
        <div className="keen-slider__slide number-slide3">
          <>
            {" "}
            <p className="absolute top-3 text-red-600 text-2xl">Unicorn</p>
            <img src={Unicorn} alt="unicorn" />
          </>
        </div>
        <div className="keen-slider__slide number-slide4">
          {" "}
          <>
            {" "}
            <p className="absolute top-3 text-red-600 text-2xl">Grisly Bear</p>
            <img src={bear2} alt="bear2" />
          </>{" "}
        </div>
        <div className="keen-slider__slide number-slide5">
          <>
            {" "}
            <p className="absolute top-3 text-red-600 text-2xl">Combo </p>
            <img src={gal2} alt="gallery2" />
          </>{" "}
        </div>
        <div className="keen-slider__slide number-slide6">
          {" "}
          <>
            {" "}
            <p className="absolute top-3 text-red-600 text-2xl">Lion</p>
            <img src={lion} alt="Lions" />
          </>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
