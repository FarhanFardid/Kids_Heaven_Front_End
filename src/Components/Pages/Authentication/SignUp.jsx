import { Link, useNavigate } from "react-router-dom";
import google from '../../../assets/Icons/google Icon.png'

import signImg from '../../../assets/animals/Banner/banner-6.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
 
  
  const navigate= useNavigate();
  const {createUser,updateUser,googleSign} = useContext(AuthContext);
    const signUpHandle = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password);
    
        createUser(email,password)
        .then(res => {
          const signedUser = res.user;
          updateUser(signedUser,name,photo)
          console.log(signedUser);
          toast.success("Successfully Signed Up")
          form.reset()
          navigate('/login')
      })
      .catch(err=>{console.log(err)
       
      toast.error('Sign Up Unsuccessful')})
    }
    const googleHandle=()=>{
      googleSign()
      .then(res=>{
        const signedUser = res.user;
        console.log(signedUser);
        toast.success("Successfully Signed Up")
        navigate('/')
      })
      .catch(err=>{console.log(err)
        
        toast.error('Sign Up Unsuccessful')})
    }
    return (
        <>
        <div className="hero h-[300px]" style={{ backgroundImage: `url('${signImg}')` }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold text-slate-950">Please Register</h1>
    
    </div>
  </div>
</div>

           <div className="hero min-h-screen bg-purple-200 p-3">
           <div className="hero-content  w-full px-24">
             
             <div className="card shadow-2xl bg-base-200  w-1/2 ">
               <form onSubmit={signUpHandle} className="card-body p-14">
                 <h3 className='text-2xl font-bold text-center p-1'>Sign Up </h3>
                 <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Name</span>
       </label>
       <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Email</span>
       </label>
       <input type="text" placeholder="your email" name="email" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Photo URL</span>
       </label>
       <input type="test" placeholder="your photo url" name="photo" className="input input-bordered" required/>
      
     </div>
     <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Password</span>
       </label>
       <input type="password" placeholder="your password" name="password" className="input input-bordered" required/>
      
     </div>
     <div className="form-control mt-6">
       <input  type="submit" className="btn bg-red-700" value="Sign Up"></input>
  
     </div>
               </form>
               <div className='text-center '>
               <p className='text-center pb-1'>or Sign Up with</p>
               <button onClick={googleHandle} className="btn btn-circle btn-outline h-5 w-15">
          <img src={google} alt="google img logo" />
         </button>
         
         <p className='p-2 text-sm'>Already Have an Account? <Link className='font-medium text-blue-800' to='/login'>Sign In</Link></p>
               </div>
             
             </div>
           </div>
         </div>
         
         </>
    );
};

export default SignUp;