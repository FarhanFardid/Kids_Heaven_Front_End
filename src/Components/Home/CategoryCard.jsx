import { Link } from "react-router-dom";


const CategoryCard = (props) => {
    console.log(props.value)
    const toy = props.value;
    return (
        <div className="card md:w-96 bg-base-200 shadow-md w-64 mx-auto md:h-auto h-80">
        <figure className="md:px-4 px-1 md:pt-8 pt-2 bg-base-300">
          <img src={toy.image} alt="Toy img" className="rounded-xl md:w-64 md:h-64 w-40 h-40 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title md:text-2xl text-lg font-bold text-blue-700">{toy.toyName}</h2>
          <p className="font-bold md:text-lg text-xs">Quantity Available : {toy.quantity}</p>
          <p className="font-bold md:text-lg text-xs" >price : {toy.price}</p>
          
          <div className="card-actions">
           <Link to={`/toyDetails/${toy._id}`}><button className="btn md:btn-sm btn-xs bg-red-700">View Details</button></Link> 
          </div>
        </div>
      </div>
    );
};

export default CategoryCard;