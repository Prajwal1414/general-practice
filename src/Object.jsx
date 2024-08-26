import React,{useState} from "react";
function Object(){

    const [car,setCar]  = useState({
        year: 2024,
        brand: "Ford",
        model: "Mustang"
    });

    const handleYearChange = (e) =>  {
        setCar((c) => ({...c,year:e.target.value}))

    }

    const handleBrandChange = (e) => {
        setCar((c) => ({...c, brand:e.target.value}))

    }

    const handleModelChange = (e) => {
        setCar((c) => ({...c, model: e.target.value}))
    }

    return(
        <>
            <div>
               <p>My favorite car is {car.year} {car.brand} {car.model}</p>
               <input type="number" value={car.year} placeholder="Enter the year" onChange={handleYearChange}/>
               <input type="text" value={car.brand} placeholder="Enter the brand" onChange={handleBrandChange}/>
               <input type="text" value={car.model} placeholder="Enter the model" onChange={handleModelChange}/>
            </div>
        </>

    );

}
export default Object;