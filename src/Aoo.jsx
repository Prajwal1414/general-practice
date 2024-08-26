import React, {useState} from "react";

export default function Aoo(){

    const [cars, setCars] = useState([]);

    const [carYear,setCarYear]  = useState(new Date().getFullYear());
    const [carBrand, setCarBrand] = useState("");
    const [carModel,setCarModel] = useState("");

    const handleAddCar = () => {
           const newCar = {
            year: carYear,
            brand: carBrand,
            model: carModel
           }

           setCars(c => [...cars, newCar])

           setCarYear(new Date().getFullYear());
           setCarBrand("");
           setCarModel("");

    }

    const handleCarRemoval = (index) => {
        setCars(c => c.filter((_,i) => i !== index))
    }

    const handleYearChange = (e) => {
        setCarYear(e.target.value)
        
    }

    const handleBrandChange = (e) => {
        setCarBrand(e.target.value)
    }

    const handleModelChange = (e) => {
        setCarModel(e.target.value)
    }

    return(
        <>
            <div>
                <h2>This is my list of favorite cars</h2>
                <ul>
                    {cars.map((car,index) => <li key={index} onClick={() => handleCarRemoval(index)}> {car.year} {car.brand} {car.model}</li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange}/><br></br>
                <input type="text" value={carBrand} onChange = {handleBrandChange} placeholder="Enter the car brand"/><br></br>
                <input type="text" value={carModel} onChange = {handleModelChange} placeholder="Enter the car model"/>
                <button onClick={handleAddCar}>Add Car</button>
            </div>
        
        </>
    )

}
