// import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import google from '../../../assets/Icons/google Icon.png'
import authImg from '../../../assets/auth image/login-2.png'


const Login = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location.state?.from?.pathname || '/'
    const loginHandle = event =>{
      event.preventDefault();
      const form = event.target;
      const email= form.email.value;
      const password = form.password.value;
      console.log(email,password);
    //   loginUser(email,password)
    //   .then(res=>{
    //     const loggedUser = res.user;
    //     console.log(loggedUser);
    //     form.reset();
    //     navigate(from, {replace:true})
  
    //   })
    //   .catch(error=>{
    //     console.log(error);
    //   })
  
    }
    
    const googleHandle=()=>{
    //   googleUser()
    //   .then(res=>{
    //     const loggedUser = res.user;
    //     console.log(loggedUser);
    //   })
    //   .catch(error=>{console.log(error)})
    }
     
    return (
        <>
        <div className="hero h-[150px]" style={{ backgroundImage: `url('${authImg}')` }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Please Login</h1>
    
    </div>
  </div>
</div>

           <div className="hero min-h-screen bg-purple-200">
           <div className="hero-content  w-full px-24">
             
             <div className="card shadow-2xl bg-base-200  w-1/2 ">
               <form onSubmit={loginHandle} className="card-body p-14">
                 <h3 className='text-2xl font-bold text-center p-1'>Sign In </h3>
                 <div className="form-control">
                   <label className="label font-bold">
                     <span className="label-text">Email</span>
                   </label>
                   <input type="text" placeholder="your email" name="email" className="input input-bordered w-full" required/>
                 </div>
                 <div className="form-control">
                   <label className="label font-bold">
                     <span className="label-text">Password</span>
                   </label>
                   <input type="password" placeholder="your password" name="password" className="input input-bordered" required />
                  
                 </div>
                 <div className="form-control mt-6">
                   <input  type="submit" className="btn bg-red-700" value="Sign In"></input>
              
                 </div>
               </form>
               <div className='text-center '>
               <p className='text-center pb-1'>or Sign In with</p>
               <button onClick={googleHandle} className="btn btn-circle btn-outline h-5 w-15">
          <img src={google} alt="" />
         </button>
         
         <p className='p-2 text-sm'>Don`t Have an Account? <Link className='font-medium text-blue-800' to='/signUp'>Sign Up</Link></p>
               </div>
             
             </div>
           </div>
         </div></>

    );
};

export default Login;