import { Link } from "react-router-dom";
import google from '../../../assets/Icons/google Icon.png'
import authImg from '../../../assets/auth image/login-logo.png'


const SignUp = () => {
    const signUpHandle = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
    
    //     createUser(email,password)
    //     .then(res => {
    //       const signedUser = res.user;
    //       userUpdate(signedUser,name)
    //       console.log(signedUser);
    //       form.reset()
    //       navigate('/login')
    //   })
    //   .catch(error=>console.log(error))
    }
    const googleHandle=()=>{
    //   googleUser()
    //   .then(res=>{
    //     const signedUser = res.user;
    //     console.log(signedUser);
    //     navigate('/')
    //   })
    }
    return (
        <>
        <div className="hero h-[150px]" style={{ backgroundImage: `url('${authImg}')` }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Please Register</h1>
    
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
         </div></>
    );
};

export default SignUp;