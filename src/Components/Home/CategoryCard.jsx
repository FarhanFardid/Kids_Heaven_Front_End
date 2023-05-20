import { Link } from "react-router-dom";


const CategoryCard = (props) => {
    console.log(props.value)
    const toy = props.value;
    return (
        <div className="card md:w-96 bg-base-200 shadow-xl w-72 mx-auto h-auto">
        <figure className="md:px-4 px-2 md:pt-10 pt-3">
          <img src={toy.image} alt="Toy img" className="rounded-xl md:w-64 md:h-64 w-44 h-44" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title md:text-2xl text-xl font-bold text-blue-700">{toy.toyName}</h2>
          <p className="font-bold md:text-lg text-sm">Quantity Available : {toy.quantity}</p>
          <p className="font-bold md:text-lg text-sm" >price : {toy.price}</p>
          
          <div className="card-actions">
           <Link to={`/toyDetails/${toy._id}`}><button className="btn md:btn-sm btn-xs bg-purple-700">View Details</button></Link> 
          </div>
        </div>
      </div>
    );
};

export default CategoryCard;