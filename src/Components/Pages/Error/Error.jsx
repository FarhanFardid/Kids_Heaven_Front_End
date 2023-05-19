import { Link } from 'react-router-dom';
import errorImg from '../../../assets/Error/error.jpg'

const Error = () => {
    return (
        <div className='w-full h-full p-16 bg-purple-300 relative'>
            <img src={errorImg} alt="error 404" className='w-full h-[600px] rounded-xl'  />
            <Link to='/'><button className='btn absolute top-20 left-20 bg-slate-600'>Back to Home</button></Link>
        </div>
    );
};

export default Error;