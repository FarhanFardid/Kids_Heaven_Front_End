import banner1 from '../../assets/animals/Banner/banner-1.png'
import banner2 from '../../assets/animals/Banner/banner-10.png'
import banner3 from '../../assets/animals/Banner/banner-7.png'

const Slider = () => {
    return (
        <div className="carousel w-full md:h-[650px] h-[250px] ">
        <div id="slide1" className="carousel-item relative w-full h-full  ">
          <img src={banner3} className="w-full  rounded-xl h-full" />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#2e284f] to-[rgba(20, 20, 20, 0)]">
            <div className='text-white md:space-y-7 space-y-1 md:pl-12 pl-3 md:w-2/3 w-4/5 h-full md:pt-44  '>
                <h2 className='md:text-5xl text-lg text-red-600 md:p-2 p-1 font-bold'>Bringing the Animal Kingdom to Your Doorstep...</h2>
                <p className='md:p-2 md:text-xl text-xs p-1'>Let The Imagination Run Wild with Our Amazing Animal Toy Collection. Discover a Heaven of Animals.</p>
                <div>   <button className="btn btn-xs md:btn-lg bg-red-700 md:mx-3 m-1 rounded-md md:rounded-xl ">Explore Kids Heaven</button>
               </div>
             
            </div>
            </div>
            <div className="absolute flex right-3 bottom-3 md:right-14 md:bottom-10">
            <a href="#slide3" className="btn-circle btn btn-xs md:btn-lg  md:mr-4 mr-2 bg-red-600">❮</a> 
            <a href="#slide2" className="btn-circle btn btn-xs md:btn-lg  md:mr-4 mr-2 bg-red-600">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full md:h-full h-full ">
          <img src={banner2} className="w-full h-full rounded-xl " />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#2e284f] to-[rgba(20, 20, 20, 0)]">
            <div className='text-white md:space-y-7 space-y-1 md:pl-12 pl-3 md:w-2/3 w-4/5 md:h-full md:pt-44  '>
                <h2 className='md:text-5xl text-lg text-red-600 md:p-2 p-1 font-bold'>Bringing the Animal Kingdom to Your Doorstep...</h2>
                <p className='md:p-2 md:text-xl text-xs p-1'>Let The Imagination Run Wild with Our Amazing Animal Toy Collection. Discover a Heaven of Animals.</p>
                <div>   <button className="btn btn-xs md:btn-lg bg-red-700 md:mx-3 m-1 rounded-md md:rounded-xl ">Explore Kids Heaven</button>
               </div>
             
            </div>
            </div>
            <div className="absolute flex right-3 bottom-3 md:right-14 md:bottom-10">
            <a href="#slide1" className="btn-circle btn btn-xs md:btn-lg  md:mr-4 mr-2 bg-red-600">❮</a> 
            <a href="#slide3" className="btn-circle btn btn-xs md:btn-lg  md:mr-4 mr-2 bg-red-600">❯</a>
          </div>
        </div>  
        <div id="slide3" className="carousel-item relative w-full h-full  ">
          <img src={banner1} className="w-full  rounded-xl h-full" />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#2e284f] to-[rgba(20, 20, 20, 0)]">
            <div className='text-white md:space-y-7 space-y-1 md:pl-12 pl-3 md:w-2/3 w-4/5 md:h-full md:pt-44  '>
                <h2 className='md:text-5xl text-lg text-red-600 md:p-2 p-1 font-bold'>Bringing the Animal Kingdom to Your Doorstep...</h2>
                <p className='md:p-2 md:text-xl text-xs p-1'>Let The Imagination Run Wild with Our Amazing Animal Toy Collection. Discover a Heaven of Animals.</p>
                <div>   <button className="btn btn-xs md:btn-lg bg-red-700 md:mx-3 m-1 rounded-md md:rounded-xl ">Explore Kids Heaven</button>
               </div>
             
            </div>
            </div>
            <div className="absolute flex right-3 bottom-3 md:right-14 md:bottom-10">
            <a href="#slide2" className="btn-circle btn btn-xs md:btn-lg  md:mr-4 mr-2 bg-red-600">❮</a> 
            <a href="#slide1" className="btn-circle btn btn-xs md:btn-lg  md:mr-4 mr-2 bg-red-600">❯</a>
          </div>
        </div> 
   
      </div>
    );
};

export default Slider;