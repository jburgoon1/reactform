import React, {useReducer, useState} from 'react'
import BoxForm from './BoxForm'
import Boxes from './Boxes'



const BoxList = () =>{



const [boxes, setBoxes] = useState([])


const handleDelete = (id) =>{
    const filteredBoxes = boxes.filter(box => id !==box.id)
    setBoxes(filteredBoxes)
}

const addBoxes =(box)=>{
    let newBox = {...box, id:Math.random()}
    setBoxes(boxs=>[...boxs, newBox])
}

return (
<>

<BoxForm  addBoxes={addBoxes} />
<div>
{boxes.map( ({id, width, height, backgroundColor})=><Boxes  width={width} height={height} backgroundColor={backgroundColor} handleDelete={()=> handleDelete(id)}/>)}
</div>
    


</>
)
}

export default BoxList;