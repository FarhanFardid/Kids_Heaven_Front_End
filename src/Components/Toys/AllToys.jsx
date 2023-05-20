import { useLoaderData } from "react-router-dom";
import ToyRows from "./ToyRows";
import useTitle from "../Hooks/useTitle";
import { useState } from "react";


const AllToys = () => {
  useTitle("All Toy")
    const loadedToys = useLoaderData();
    const [storedToys,setStoredToys] = useState(loadedToys)
    const [searchQuery, setSearchQuery] = useState('');

    console.log(storedToys);
    // limiting the data to show only 20 items
    if(storedToys.length > 20){
    const limitedToys = storedToys.slice(0,20);
    setStoredToys(limitedToys)
    }

    const handleSearch = (event) => {
      const query = event.target.value;
      setSearchQuery(query);
  
      //  search by name Operation
      const filteredToys = storedToys.filter((toy) =>
        toy.toyName.toLowerCase().includes(query.toLowerCase())
      );
      setStoredToys(filteredToys);
    };

    return (
        <div className="bg-violet-300">
          <div className="text-center">  <h3 className="text-4xl text-center font-bold text-yellow-700 p-3">All Available Toys </h3><input type="text" placeholder="Search Toy Name " className="input input-bordered w-full max-w-xs my-3" value={searchQuery}
        onChange={handleSearch} /></div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
 
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