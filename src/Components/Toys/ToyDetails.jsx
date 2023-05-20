import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";


const ToyDetails = () => {
    useTitle("Toy Details")
    const selectedToy =useLoaderData();
    console.log(selectedToy);
    const {_id,sellerName,toyName,image,price,quantity,subCategory,sellerEmail,details} = selectedToy;
    return (
        <div className="bg-purple-200 p-10">
            <h3 className="font-bold text-4xl text-center py-8 text-purple-900">{toyName} Toy Details</h3>
            
<div  className="flex flex-col items-center bg-white border border-gray-200 mx-auto rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100 p-20 m-8 ">
    <img className="object-cover w-80 rounded-lg h-96 md:h-auto  " src={image} alt="toy image"/>
    <div className="flex flex-col  ps-20 space-y-3   text-left">
        <h5 className="mb-2 text-2xl font-bold  text-gray-900 ">{toyName}</h5>
        <p className=" font-bold text-gray-800 text-lg">Toy id: {_id}</p>
        <p className=" font-bold text-gray-800 text-lg">Seller name: {sellerName}</p>
        <p className=" font-bold text-gray-800 text-lg">Seller email: {sellerEmail}</p>
        <p className=" font-bold text-gray-800 text-lg">Sub-category: {subCategory}</p>
        <p className=" font-bold text-gray-800 text-lg">Available Quantity: {quantity}</p>
        <p className=" font-bold text-gray-800 text-lg">Toy Details: {details}</p>
        <p className=" font-bold text-gray-800 text-lg">Toy price: {price}</p>
        
    </div>
</div>

        </div>
    );
};

export default ToyDetails;