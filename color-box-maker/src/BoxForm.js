import React, {useState} from 'react'

const BoxForm = ({ addBoxes}) =>{

    const INITIAL_STATE = {
        width:'',
        height:'',
        backgroundColor:''
    }
    const [style, setStyle] = useState(INITIAL_STATE)

    const handleChange = (e) =>{
        e.preventDefault()
        const {name, value} = e.target;
        setStyle((style) => ({
            ...style,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addBoxes({...style})
        setStyle(INITIAL_STATE)
    }
   

   
return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="width">Width:</label>
        <input type="range" id="width" name="width" value={style.width} onChange={handleChange} placeholder="width"></input>
        <label htmlFor="height">Height:</label>
        <input type="range" id="height" name="height" value={style.height} onChange={handleChange} placeholder="height"></input>
        <label htmlFor="bgcolor">Background Color:</label>
        <input type="text" name="backgroundColor" id='bgcolor' value={style.backgroundColor} onChange={handleChange} placeholder="Background Color"></input>
        <button >Make a new box!</button>
    </form>


)
}

export default BoxForm;
