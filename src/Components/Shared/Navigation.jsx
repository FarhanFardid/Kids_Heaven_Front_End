import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/kid_logo-1.png'

const Navigation = () => {
    const handleLogout =() =>{
        // logout()
        // .then(()=>{})
        // .catch(error=>console.log(error))
      }
    const user = null;

          return (
            <div className="navbar bg-purple-300">
              <div className="navbar-start">
              <a className=" normal-case  "> <img src={logo} alt="logo" className='md:w-20 md:h-20 md:p-1 w-14 h-12 rounded-full md:mr-3 ' /> </a>
              <span className=" md:text-3xl text-lg font-bold ms-1 text-red-800">Kids Heaven</span>
                <div className="dropdown navbar-center">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
                  >
                    <li>
                     <Link to="/"> <a>Home</a></Link>
                    </li>
                   
                    <li>
                    <Link to='/blogs'> <a > Blogs</a></Link>
                     
                    </li>
                    <li>
                    <Link to='/'> <a > All Toys </a></Link>
                     
                    </li>
        
                    {
                      user ? <><li>
                      <Link to="/"><button>My Toys</button></Link></li> <li>
                      <Link to="/"><button>Add A Toy</button></Link></li></>  : <li></li>
                      
                    }
                  
                 
                  </ul>
                </div>
              
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                  <li>
                  <Link to="/"><a>Home</a></Link>
                   
                  </li>
                 
                  <li>
                    <Link to='/blogs'> <a > Blogs</a></Link>
                     
                    </li>
                    <li>
                    <Link to='/'> <a > All Toys </a></Link>
                     
                    </li>
        
                    {
                      user ? <><li>
                      <Link to="/"><button>My Toys</button></Link></li> <li>
                      <Link to="/"><button>Add A Toy</button></Link></li></>  : <li></li>
                      
                    }
                
                </ul>
              </div>
              <div className="navbar-end">
         {
                user? <Link ><button className="btn bg-red-700" onClick={handleLogout}>Logout</button></Link> :
                <Link to="/login"><button className="btn bg-red-700 hover:bg-blue-700" >Login</button></Link>
               }
              
              </div>
            </div>


    );
};

export default Navigation;