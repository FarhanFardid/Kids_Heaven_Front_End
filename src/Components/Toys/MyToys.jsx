import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyToyRows from "./MyToyRows";
import Swal from 'sweetalert2'
import useTitle from "../Hooks/useTitle";


const MyToys = () => {
  useTitle("My Toys")
const {user} = useContext(AuthContext);
const[toys,setToys] = useState([]);

const handleDelete = (id) =>{
  console.log(id)

  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
  fetch(`https://kids-heaven-server.vercel.app/toys/${id}`, {
  
      method:"DELETE",
   
  })
  .then(res => res.json())
  .then (data => {console.log(data)
  if(data.deletedCount>0){
      Swal.fire(
              'Deleted!',
              'Toy is deleted',
              'success'
      )
      const remainingToys = toys.filter(toy=> toy._id !== id)
      setToys(remainingToys)
  }
  })
}})

 }
    const uri = `https://kids-heaven-server.vercel.app/toys?sellerEmail=${user?.email}`
  useEffect(()=>{
    fetch(uri)
    .then (res=> res.json())
    .then (data => {console.log(data)
    setToys(data)})
  },[uri])
    return (
      <div className="bg-violet-300">
      <div className="text-center">  <h3 className="text-4xl text-center font-bold text-yellow-700 p-3">My Toys </h3></div>
        <div className="overflow-x-auto w-full">
<table className="table w-full">
{/* head */}
<thead>
  <tr>
    <th>
      
    </th>
    <th>Toy Image & Name</th>
    <th>Seller Name</th>
    <th>Sub-category</th>
  
    
    <th>Price</th>
    <th>A. Quantity</th>
    <th>Details</th>
    <th>Update</th>
    <th>Delete</th>
   
  </tr>
</thead>
<tbody>
  {
    toys.map(toy=> <MyToyRows key={toy._id}
       toy={toy}
        handleDelete={handleDelete}
        ></MyToyRows>)
  }


</tbody>


</table>
</div>
    </div>
    );
};

export default MyToys;