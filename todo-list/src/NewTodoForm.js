import React, { useState } from 'react'

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {todo:''}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target
        setFormData(todo =>({
            ...todo,
            [name]:value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo:</label>
            <input type = "text" name="todo" id="todo"  value ={formData.todo} onChange={handleChange} placeholder="new todo"></input>
            <button >Add Todo</button>
        </form>
    )
}

export default NewTodoForm;
