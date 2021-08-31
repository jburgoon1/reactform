import React from 'react'

const Todos = ({todo, remove}) =>{

    return ( <>
    {todo.map(t=>{
             return(
                 <div>
                     <p key={todo.id}><button onClick={()=>remove(t.id)}>X</button>{t.todo}</p>
                     </div> 
             
             )
    })}
   
               
           </>
       )
       
    
}

export default Todos;