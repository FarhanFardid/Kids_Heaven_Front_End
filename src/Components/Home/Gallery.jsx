import uni1 from '../../assets/animals/Unicorn/unicorn-1.png'
import uni2 from '../../assets/animals/Unicorn/unicorn-2.png'
import galImg1 from '../../assets/animals/Cat/cat-3.png'
import galImg2 from '../../assets/animals/Gallary/DinoComb-3.png' 
import galImg3 from '../../assets/animals/Bear/bear-3.png' 
import galImg4 from '../../assets/animals/Gallary/galary-1.png' 
import galImg5 from '../../assets/animals/Lion/lion-1.png' 
import galImg6 from '../../assets/animals/Gallary/galary-3.png' 
 

const Gallery = () => {
    return (
        <div className='bg-[#b9b7cd] md:p-5 p-2'>
        <h3 className='md:text-4xl text-lg font-bold text-center text-purple-800 md:p-3 p-1'>Toy Gallery</h3>
        <p className='md:text-lg text-xs text-center md:p-2 p-1 text-blue-800 font-medium '>Let the Adventure Begin! Find the Perfect Toys for Every Child</p>
           <div className='grid md:grid-cols-4 md:gap-3 grid-cols-2 gap-2'>
            <div className="card  ">
  <figure className=" md:pt-5 pt-2">
    <img src={uni2} alt="unicorn" className="md:rounded-xl rounded-md md:w-72 md:h-72 w-48 h-48" />
  </figure>
</div>
<div className="card ">
  <figure className="  md:pt-5 pt-2">
    <img src={galImg2} alt="gallery img" className="md:rounded-xl rounded-md md:w-72 md:h-72 w-48 h-48" />
  </figure>
</div>
<div className="card  ">
  <figure className="  md:pt-5 pt-2">
    <img src={galImg6} alt="gallery img" className="md:rounded-xl rounded-md md:w-72 md:h-72 w-48 h-48" />
  </figure>
</div>
<div className="card  ">
  <figure className="  md:pt-5 pt-2">
    <img src={galImg5} alt="gallery img" className="md:rounded-xl rounded-md md:w-72 md:h-72 w-48 h-48" />
  </figure>
</div>
<div className="card  ">
  <figure className="  md:pt-5 pt-2">
    <img src={galImg3} alt="gallery img" className="md:rounded-xl rounded-md md:w-72 md:h-72 w-48 h-48" />
  </figure>
</div>
<div className="card  ">
  <figure className="  md:pt-5 pt-2">
    <img src={galImg4} alt="gallery img" className="md:rounded-xl rounded-md md:w-72 md:h-72 w-48 h-48" />
  </figure>
</div>
<div className="card  ">
  <figure className="  md:pt-5 pt-2">
    <img src={uni1} alt="gallery img" className="md:rounded-xl rounded-md md:w-72 md:h-72 w-48 h-48" />
  </figure>
</div>
<div className="card  ">
  <figure className="  md:pt-5 pt-2">
    <img src={galImg1} alt="gallery img" className="md:rounded-xl rounded-md md:w-72 md:h-72 w-48 h-48" />
  </figure>
</div>
        </div></div>

     
    );
};

export default Gallery;