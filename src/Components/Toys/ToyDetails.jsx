import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const selectedToy =useLoaderData();
    console.log(selectedToy);
    return (
        <div>
            <h3>Selected Toy : {selectedToy.length}</h3>
        </div>
    );
};

export default ToyDetails;