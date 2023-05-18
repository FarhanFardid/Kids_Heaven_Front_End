import logo from '../../assets/Logo/kid_logo-1.png'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    
          return (
            <footer className="footer bg-slate-900 md:p-12 p-5 text-white  ">
              <div className="footer__logo">
                <img src={logo} className='w-12 h-12 rounded-full mx-auto' alt="Kids Heaven Logo" />
                <h2 className='text-lg font-bold text-purple-300'>Kids Heaven</h2>
              </div>
              <div className="footer__contact">
                <h3 className='font-bold text-red-600 text-base'>Contact Information</h3>
                <p className='text-xs font-medium'>Phone: 123-456-7890</p>
                <p className='text-xs font-medium'>Email: info@kidsheaven.com</p>
              </div>
              <div className="footer__social">
                <h3 className="font-bold text-red-600 text-base">Follow Us</h3>
                <ul className='flex '>
                  <li className='pr-2'>
                    <a href="#">
                      <FaFacebookSquare className='w-4 h-4' />
                    </a>
                  </li>
                  <li className='pr-2'>
                    <a href="#">
                     <FaInstagramSquare className='w-4 h-4'/>
                    </a>
                  </li>
                  <li className='pr-2'>
                    <a href="#" >
                 <FaTwitterSquare className='w-4 h-4'/>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__address">
                <h3 className="font-bold text-red-600 text-base">Address</h3>
                <p className='text-xs font-medium'>123 Main Street, London, UK</p>
              </div>
              <div className="md:mt-5">
                <p className="font-bold text-red-600 text-base ">&copy; {new Date().getFullYear()} Kids Heaven. All rights reserved.</p>
              </div>
            </footer>
          );
        };
        
  

export default Footer;