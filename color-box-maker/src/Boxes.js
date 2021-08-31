import React, {useState} from 'react'


const Boxes = ({width, height, backgroundColor, handleDelete}) =>{

 
return (
    <div style={{backgroundColor:backgroundColor, width:`${width}px`, height:`${height}px`}}>
        <button onClick={handleDelete}>X</button>
    </div>

)

}

export default Boxes;