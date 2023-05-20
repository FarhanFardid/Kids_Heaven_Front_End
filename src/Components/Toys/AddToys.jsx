import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'
import useTitle from "../Hooks/useTitle";



const AddToys = () => {
  useTitle("Toy Add")

    const {user} = useContext(AuthContext);
    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const sellerName = form.seller_name.value;
        const sellerEmail = form.seller_email.value;
        const toyName = form.toy_name.value;
        const image = form.toy_image.value;
        const subCategory = form.sub_category.value;
        const  price = form.price.value;
        const  quantity= form.quantity.value;
        const details = form.details.value;
        const addToy = {sellerName,sellerEmail,toyName,image,subCategory,price,quantity,details};
        console.log(addToy)
         fetch('https://kids-heaven-server.vercel.app/toys', {
            method: 'POST',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(addToy)
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data)
           
            if(data.insertedId){
                form.reset()
                Swal.fire({
                    title: 'success',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
         })

    }
    return (
        <div className="bg-gray-300">
              <h3 className='text-4xl font-bold text-center p-4 text-purple-900'>Add A Toy </h3>
            <form onSubmit={handleAddToy} className="card-body p-14 grid grid-cols-2">
               
                 <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Seller Name</span>
       </label>
       <input type="text" placeholder="seller name" defaultValue={user?.displayName} name="seller_name" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Seller Email</span>
       </label>
       <input type="email" placeholder="seller email" defaultValue={user?.email} name="seller_email" className="input input-bordered" required />
     </div>
 
     <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Toy Name</span>
       </label>
       <input type="text" placeholder="Enter toy name" name="toy_name" className="input input-bordered" required/>
       </div>
       <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Toy Image</span>
       </label>
       <input type="text" placeholder="Enter toy Image" name="toy_image" className="input input-bordered" required/>
      
     </div>
       <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Toy Sub-Category</span>
       </label>
       <input type="text" placeholder="Enter Toy sub-category" name="sub_category" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Price</span>
       </label>
       <input type="text" placeholder="Enter toy price " name="price" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Available Quantity</span>
       </label>
       <input type="text" placeholder="Enter available quantity" name="quantity" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label font-bold">
         <span className="label-text">Toy Details</span>
       </label>
       <input type="text" placeholder="Enter toy details" name="details" className="input input-bordered" required />
     </div>
      
     
     <div className="form-control mt-6 col-span-2">
       <input  type="submit" className="btn bg-red-700" value="Add Toy"></input>
  
     </div>
               </form>
        </div>
    );
};

export default AddToys;