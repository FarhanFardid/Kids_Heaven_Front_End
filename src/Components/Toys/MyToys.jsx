import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const MyToys = () => {
const {user} = useContext(AuthContext);
const[toy,setToy] = useState([]);

    const uri = `http://localhost:5000/toys?sellerEmail=${user?.email}`
  useEffect(()=>{
    fetch(uri)
    .then (res=> res.json())
    .then (data => {console.log(data)
    setToy(data)})
  },[uri])
    return (
        <div>
            <h2>My Toys: {toy.length}</h2>
        </div>
    );
};

export default MyToys;