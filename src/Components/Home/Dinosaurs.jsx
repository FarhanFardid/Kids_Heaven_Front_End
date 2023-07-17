import Trex from '../../../src/assets/animals/Banner/banner-5.png'

const Dinosaurs = () => {
    return (
        <div>
            <h3 className='md:text-4xl text-lg font-bold text-center text-purple-800 md:p-3 p-1'>New  Toys Coming soon...</h3>
            <div className='fluid'>
                <img src={Trex} alt="dinosaurs" className='max-w-full w-full' />
            </div>
        </div>
    );
};

export default Dinosaurs;