import { useLoaderData } from "react-router-dom";
import ToyRows from "./ToyRows";


const AllToys = () => {
    const storedToys = useLoaderData();
    console.log(storedToys);
    return (
        <div className="bg-violet-300">
          <div className="text-center">  <h3 className="text-4xl text-center font-bold text-yellow-700 p-3">All Available Toys </h3><input type="text" placeholder="Search Toy Name " className="input input-bordered w-full max-w-xs my-3 " /></div>
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
      </tr>
    </thead>
    <tbody>
      {
        storedToys.map(toy=> <ToyRows key={toy._id} toy={toy}></ToyRows>)
      }
 
  
    </tbody>
 
    
  </table>
</div>
        </div>
    );
};

export default AllToys;