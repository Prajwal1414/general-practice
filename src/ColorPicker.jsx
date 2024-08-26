import react, {useState} from 'react'
function ColorPicker(){

    const [color,setColor] = useState("#000000");

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

 
    return(
    <>
        <div className='container'>
        <h2>Color Picker App</h2>
            <div className='colorPicker' style={{backgroundColor: color}}>       
              <p>The color picked is {color}</p>
            </div>
            <input type="color" onChange={handleColorChange} value={color}/>
        </div>
    </>
    )
}

export default ColorPicker;