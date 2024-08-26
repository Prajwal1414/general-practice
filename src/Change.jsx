import react, {useState} from 'react'

function Change(){

    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(18);
    const [choice,setChoice] = useState();
    

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    
    const handleRadioChange = (e) => {
        setChoice(e.target.value);
    }
    

    return(
        <>
            <div className="container">
                <input type="text" onChange={handleNameChange} value={name} />
                <p>My name is: {name}</p>

                <input type="number" onChange={handleAgeChange} value={age} />
                <p>My age is: {age}</p>

                <select name="" id="" onChange={handleRadioChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Paytm">Paytm</option>            
                </select>
                <p>The option for payment is: {choice}</p>
                
                



            </div>
        </>
    );
}

export default Change;