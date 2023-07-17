import infoPic from '../../assets/animals/Banner/banner-8.jpg'

const Info = () => {
    return (
        <div className='bg-purple-300  h-full items-center  left-0 top-0  rounded bg-gradient-to-l from-[#9860d4] to-[rgba(20, 20, 20, 0)]'>
               <h3 className='md:text-4xl text-lg font-bold text-center text-purple-800 md:p-3 p-1'>Kids Heaven Safaripedia</h3>
               <p className='font-normal md:font-medium md:text-xl text-xs text-center md:p-5 p-2 mx-auto'>Unlock the untamed wonders of the natural world, where knowledge roams free and the wild awaits your exploration.

Discover the extraordinary with Safaripedia, where every page is a gateway to adventure, connecting you to the awe-inspiring beauty of wildlife and the secrets of the wilderness.</p>
<div className='text-center p-3'><button className='btn btn-xs md:btn-lg bg-red-700 md:mx-3 m-1 rounded-md md:rounded-xl'><a href="https://safaripedia.safariltd.com/" target='blank'>Visit SafariPedia</a> </button></div>

<div className='fluid '>
                <img src={infoPic} alt="dinosaurs" className='max-w-full w-full ' />
              
            </div>
           
        </div>
    );
};

export default Info;