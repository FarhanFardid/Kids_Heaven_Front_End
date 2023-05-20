import { Link } from "react-router-dom";


const ToyRows = ({toy}) => {
    const{_id,sellerName,toyName,image,price,quantity,subCategory} =toy;
    return (
        <tr className="p-2">
        <th>
          <label>
           
          </label>
        </th>
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
        <Link to={`/toyDetails/${_id}`}><button className="btn  btn-sm bg-purple-700">View Details</button></Link>  
        </th>
      </tr>
    );
};

export default ToyRows;