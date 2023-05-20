import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";

const UpdateToy = () => {
    useTitle("Toy Update")
    const toyInfo =useLoaderData();
    console.log(toyInfo);
    const {_id,toyName,price,quantity,details} = toyInfo;
    const handleUpdateToy = event =>{
        event.preventDefault()
        const form = event.target;
        const toyName = form.toy_name.value;
        const  price = form.price.value;
        const  quantity= form.quantity.value;
        const details = form.details.value;
        const upToy={toyName,price,quantity,details}
        console.log(upToy);
        fetch(`https://kids-heaven-server.vercel.app/toys/${_id}`,{
            method: "PATCH",
            headers:{
                "content-type" : "application/json"
            }, 
            body:JSON.stringify(upToy)
        })
        .then (res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
        
                Swal.fire({
                  title: 'Success!',
                  text: 'Toy Info Updated',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
                
              }
        })

    }
    return (
        <div className="bg-gray-300">
        <h3 className='text-4xl font-bold text-center p-4 text-purple-900'>Update A Toy Info </h3>
      <form onSubmit={handleUpdateToy} className="card-body p-14 grid grid-cols-2">
         
    
<div className="form-control">
 <label className="label font-bold">
   <span className="label-text">Toy Name</span>
 </label>
 <input type="text" placeholder="Enter toy name" name="toy_name" defaultValue={toyName} className="input input-bordered" required/>
 </div>


<div className="form-control">
 <label className="label font-bold">
   <span className="label-text">Price</span>
 </label>
 <input type="text" placeholder="Enter toy price " name="price" defaultValue={price} className="input input-bordered" required />
</div>
<div className="form-control">
 <label className="label font-bold">
   <span className="label-text">Available Quantity</span>
 </label>
 <input type="text" placeholder="Enter available quantity" defaultValue={quantity} name="quantity" className="input input-bordered" required />
</div>
<div className="form-control">
 <label className="label font-bold">
   <span className="label-text">Toy Details</span>
 </label>
 <input type="text" placeholder="Enter toy details" name="details" defaultValue={details} className="input input-bordered" required />
</div>


<div className="form-control mt-6 col-span-2">
 <input  type="submit" className="btn bg-red-700" value="Update Toy"></input>

</div>
         </form>
  </div>
    );
};

export default UpdateToy;