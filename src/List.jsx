import React,{useState} from "react";

function List(){

    const [foods,setFoods] = useState(["Apple", "orange", "oreo"]);

    const addFood = ()  => {
        const newFood = document.getElementById('foodInput').value;
        setFoods([...foods, newFood]);

        document.getElementById("foodInput").value = "";

    }

    const removeFood = (index) => {
        setFoods(foods.filter((_,i) => i !== index))
    }

    return(
        <>
            <div>
                <h2>This is my shopping list</h2>
                <ul>
                    {foods.map((food,index) => <li key={index} onClick={() => removeFood(index)}> {food} </li>)}
                </ul>
                <input placeholder="Enter new food" id="foodInput"></input>
                <button onClick={addFood}>Add</button>
            </div>
        </>
    )
}

export default List;