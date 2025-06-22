import React, {useState} from 'react';

function ColorPicker({setColor}) {

    const [localColor, setLocalColor] = useState("#b45667"); //standard color

    const colors = [
        {name: "pink", value: "#b45667"},
        {name: "red", value: "#471a1a"},
        {name: "blue", value: "#427aa1"},
        {name: "purple", value: "#3b3348"}
    ]

    function handleColorChange(event){
        const newColor = event.target.value
        setLocalColor(newColor) //save the local color
        setColor(newColor) //pass the color to App.jsx

    }

    return(
    <div className="colorpicker">
        <select 
        className="colorpicker__selector" 
        value={localColor} 
        onChange={handleColorChange} 
        style={{ backgroundColor: localColor, }}>
                {colors.map((color) => (
                    <option key={color.value} value={color.value}>
                        {color.name} 
                    </option>
                ))}
        </select>
    </div>
    )
}

export default ColorPicker