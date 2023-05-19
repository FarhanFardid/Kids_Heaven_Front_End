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
        <div className='bg-[#b9b7cd] p-4'>
        <h3 className='text-4xl font-bold text-center text-purple-800 p-3'>Toy Gallery</h3>
        <p className='text-lg text-center p-2 text-blue-800 font-medium'>Let the Adventure Begin! Find the Perfect Toys for Every Child</p>
           <div className='grid grid-cols-4 gap-2'>
            <div className="card  ">
  <figure className=" pt-5">
    <img src={uni2} alt="unicorn" className="rounded-xl w-72 h-72" />
  </figure>
</div>
<div className="card  shadow-lg">
  <figure className=" pt-5">
    <img src={galImg2} alt="gallery img" className="rounded-xl w-72 h-72" />
  </figure>
</div>
<div className="card  shadow-lg">
  <figure className=" pt-5">
    <img src={galImg6} alt="gallery img" className="rounded-xl w-72 h-72" />
  </figure>
</div>
<div className="card  shadow-lg">
  <figure className=" pt-5">
    <img src={galImg5} alt="gallery img" className="rounded-xl w-72 h-72" />
  </figure>
</div>
<div className="card  shadow-lg">
  <figure className=" pt-5">
    <img src={galImg3} alt="gallery img" className="rounded-xl w-72 h-72" />
  </figure>
</div>
<div className="card  shadow-lg">
  <figure className=" pt-5">
    <img src={galImg4} alt="gallery img" className="rounded-xl w-72 h-72" />
  </figure>
</div>
<div className="card  shadow-lg">
  <figure className=" pt-5">
    <img src={uni1} alt="gallery img" className="rounded-xl w-72 h-72" />
  </figure>
</div>
<div className="card  shadow-lg">
  <figure className=" pt-5">
    <img src={galImg1} alt="gallery img" className="rounded-xl w-72 h-72" />
  </figure>
</div>
        </div></div>

     
    );
};

export default Gallery;