
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';
const CategoryTab = () => {
  
    const [toys,setToys] = useState([])
    

    
    useEffect(()=>{
      fetch('https://kids-heaven-server.vercel.app/toys')
      .then (res=> res.json())
      .then (data => {
      setToys(data)
    //   console.log(data)
    })
    },[])

    const lions = toys.filter(toy=> toy.subCategory === "Lion" )
    
   const dinosaurs = toys.filter(toy=> toy.subCategory === "Dinosaur")
  
    const bears = toys.filter(toy=> toy.subCategory === "Bear") 
    
    //   console.log(lions);
    //   console.log(dinosaurs);
    //   console.log(bears);
 
    return (
        

        <>
        <h3 className='md:text-4xl text-lg text-center font-bold text-purple-900 md:py-6 py-1'>Shop By Category</h3>
      
        <Tabs className="md:p-10 bg-gray-200 md:m-5 rounded-lg p-1 m-1">
    <TabList>
      <Tab style={{"backgroundColor": "antiquewhite", "fontWeight":"bold", "color":"black"}} >Lion </Tab>
      <Tab style={{"backgroundColor": "red", "fontWeight":"bold", "color":"white"}}>Dinosaur</Tab>
      <Tab style={{"backgroundColor": "black", "fontWeight":"bold", "color":"white"}}>Bear</Tab>
    </TabList>

    <TabPanel >
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-2 gap-1">
        {
            lions.map(lion=> <CategoryCard key={lion._id} value={lion}></CategoryCard>)
        }
        </div>
      
       

    </TabPanel>
    <TabPanel>
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-2 gap-1">
        {
            dinosaurs.map(dino=> <CategoryCard key={dino._id} value={dino}></CategoryCard>)
        }
        </div>
    </TabPanel>
    <TabPanel>
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-2 gap-1">
        {
            bears.map(bear=> <CategoryCard key={bear._id} value={bear}></CategoryCard>)
        }
        </div>
    </TabPanel>
  </Tabs>

    </>
    );
};

export default CategoryTab;