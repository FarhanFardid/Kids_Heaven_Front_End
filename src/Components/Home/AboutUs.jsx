import aboutImg from "../../assets/animals/Banner/banner-9.jpg";

const AboutUs = () => {
  return (
    <div>
      <h3 className="md:text-4xl text-lg text-purple-900 font-bold text-center md:p-3 p-1">
        About Us{" "}
      </h3>
      <div className="card  bg-base-100 shadow-xl position-relative">
        <figure className="w-full ">
          <img src={aboutImg} alt="About us image" />
        </figure>
        <div className="absolute md:top-[60%] top-[55%] md:w-3/6 w-2/3 md:left-[360px] md:px-2 left-[80px] px-5 pt-2  text-red-950 text-center">
          <h5 className="md:text-2xl text-sm font-bold text-center md:py-3 py-1">
            Connecting Children with the Wonders of the Animal World
          </h5>
          <p className="md:text-lg font-medium text-xs">
            Welcome to Kids Heaven, your ultimate destination for
            animal-inspired toys and endless playtime fun! At Kids Heaven, we
            believe that play is not just a pastime but a crucial part of a
            child`s development.
          </p>{" "}
          <p className="md:text-lg font-medium hidden md:block">
            Our passion for animals and their remarkable world led us to create
            a toy shop dedicated to sparking imagination and fostering a love
            for wildlife.
          </p>
          <p className="md:py-2 md:text-lg font-medium hidden md:block">
            What sets Kids Heaven apart is our commitment to creating joyful
            connections between children and the animal world. We believe that
            through play, children develop empathy, creativity, and a deeper
            understanding of nature. Our toys serve as companions and catalysts
            for imaginative adventures, encouraging kids to embark on exciting
            journeys of exploration and discovery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
