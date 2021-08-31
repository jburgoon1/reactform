import React, {useState} from 'react'
import NewTodoForm from './NewTodoForm'
import Todos from './Todos'


const TodoList = () =>{
       

   
    const [todo, setTodo] = useState([])

    const removeItem = (id) =>{
        const filteredTodos = todo.filter(todos => id !==todos.id)
        setTodo(filteredTodos)
    }
   const addTodos =(t)=>{
       let newTodo = {...t, id:Math.random()}
       setTodo(to=>[...to, newTodo])
   }

    
    console.log(todo)
    return (
        <>
            <NewTodoForm addTodo={addTodos} todo={todo}/>
            
            <Todos todo ={todo} remove = {removeItem}/>
           
           
        </>
    )

}

export default TodoList;