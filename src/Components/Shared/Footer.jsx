import logo from '../../assets/Logo/kid_logo-1.png'

const Footer = () => {
    
          return (
            <footer className="footer bg-slate-900 md:p-12 p-5 text-white  ">
              <div className="footer__logo">
                <img src={logo} className='w-12 h-12 rounded-full mx-auto' alt="Kids Heaven Logo" />
                <h2 className='text-lg font-bold'>Kids Heaven</h2>
              </div>
              <div className="footer__contact">
                <h3 className='font-bold text-red-600 text-base'>Contact Information</h3>
                <p className='text-xs'>Phone: 123-456-7890</p>
                <p className='text-xs'>Email: info@kidsheaven.com</p>
              </div>
              <div className="footer__social">
                <h3 className="font-bold text-red-600 text-base">Follow Us</h3>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/kidsheaven">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/kidsheaven">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/kidsheaven">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__address">
                <h3 className="font-bold text-red-600 text-base">Address</h3>
                <p className='text-xs'>123 Main Street, London, UK</p>
              </div>
              <div className="md:mt-5">
                <p className="font-bold text-red-600 text-base ">&copy; {new Date().getFullYear()} Kids Heaven. All rights reserved.</p>
              </div>
            </footer>
          );
        };
        
  

export default Footer;