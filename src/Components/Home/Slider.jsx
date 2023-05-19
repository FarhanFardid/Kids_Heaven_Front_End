import banner1 from '../../assets/animals/Banner/banner-5.png'
import banner2 from '../../assets/animals/Banner/banner-10.png'
import banner3 from '../../assets/animals/Banner/banner-7.png'

const Slider = () => {
    return (
        <div className="carousel w-full h-[650px]">
        <div id="slide1" className="carousel-item relative w-full h-full  ">
          <img src={banner2} className="w-full h-full rounded-xl" />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-2/3 h-full pt-20  '>
                <h2 className='text-5xl text-red-600 p-2 font-bold'>Bringing the Animal Kingdom to Your Doorstep...</h2>
                <p className='p-2 text-xl'>Let The Imagination Run Wild with Our Amazing Animal Toy Collection. Discover a Heaven of Animals.</p>
                <div>   <button className="btn bg-red-700 mx-3">Explore Kids Heaven</button>
               </div>
             
            </div>
            </div>
            <div className="absolute flex  right-14 bottom-10">
            <a href="#slide4" className="btn btn-circle mr-4  bg-red-600">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-600">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-full  ">
          <img src={banner3} className="w-full h-full rounded-xl" />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-2/3 h-full pt-20  '>
                <h2 className='text-5xl text-white p-2 font-bold'>Affordable Price For Car Servicing</h2>
                <p className='p-2'>Take care of your car in the garage, and the car will take care of you on the road</p>
                <div>   <button className="btn bg-orange-600 mx-3">Discover More</button>
                <button className="btn btn-outline text-white  border-4 border-white">Latest Projects</button></div>
             
            </div>
            </div>
            <div className="absolute flex   right-11 bottom-1">
            <a href="#slide1" className="btn btn-circle mr-4 bg-orange-500">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-full  ">
          <img src={banner1} className="w-full h-full rounded-xl" />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-2/3 h-full pt-20  '>
                <h2 className='text-5xl text-white p-2 font-bold'>Affordable Price For Car Servicing</h2>
                <p className='p-2'>Take care of your car in the garage, and the car will take care of you on the road</p>
                <div>   <button className="btn bg-orange-600 mx-3">Discover More</button>
                <button className="btn btn-outline text-white  border-4 border-white">Latest Projects</button></div>
             
            </div>
            </div>
            <div className="absolute flex   right-11 bottom-1">
            <a href="#slide2" className="btn btn-circle mr-4 bg-orange-500">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-orange-500">❯</a>
          </div>
        </div> 
   
      </div>
    );
};

export default Slider;