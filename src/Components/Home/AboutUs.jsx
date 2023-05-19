import aboutImg from '../../assets/animals/Banner/banner-9.png'

const AboutUs = () => {
    return (
        <div >   
            <h3 className='text-4xl text-yellow-800 font-bold text-center p-3'>About Us </h3>
               <div className="card  bg-base-100 shadow-xl position-relative">
        <figure className='w-full '><img src={aboutImg} alt="About us image"/></figure>
       <div className='absolute top-[58%] w-3/6 left-[350px] p-2 text-red-950'><h5 className='text-2xl font-bold text-center py-3'>Connecting Children with the Wonders of the Animal World</h5>
       <p className='text-lg font-medium'>
Welcome to Kid Heaven, your ultimate destination for animal-inspired toys and endless playtime fun! At Kid Heaven, we believe that play is not just a pastime but a crucial part of a child`s development. Our passion for animals and their remarkable world led us to create a toy shop dedicated to sparking imagination and fostering a love for wildlife.</p>
<p className='py-2 text-lg font-medium'>
What sets Kid Heaven apart is our commitment to creating joyful connections between children and the animal world. We believe that through play, children develop empathy, creativity, and a deeper understanding of nature. Our toys serve as companions and catalysts for imaginative adventures, encouraging kids to embark on exciting journeys of exploration and discovery.</p></div>
      </div>
      </div>
  
    );
};

export default AboutUs;
