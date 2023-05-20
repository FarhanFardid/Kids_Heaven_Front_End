import { Link } from "react-router-dom";
import { FaArrowCircleUp } from "react-icons/fa";


const MyToyRows = ({toy,handleDelete}) => {
 
    const{_id,sellerName,toyName,image,price,quantity,subCategory} =toy;
    return (
        <tr className="p-2">
  <th></th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={image} alt="toy image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
              
            </div>
          </div>
        
        </td>
        <td className="font-bold">{sellerName}</td>
        <td className="font-bold">
          {subCategory}
        </td>
        <td className="font-bold ">{price}</td>
        <td className="font-bold">{quantity}</td>
        <th>
        <Link to={`/toyDetails/${_id}`}><button className="btn  btn-sm bg-violet-800">View Details</button></Link>  
        </th>
        <th>
          <label>
         <Link to={`/updateToy/${_id}`}> <button className="btn btn-circle btn-sm bg-green-700"><FaArrowCircleUp className="h-6 w-6"/></button></Link>
          </label>
        </th>
        <th>
          <label>
          <button onClick={()=>handleDelete(_id) } className="btn btn-circle btn-sm bg-red-800">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
      </tr>
    );
};

export default MyToyRows;