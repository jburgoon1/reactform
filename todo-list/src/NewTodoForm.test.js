import React from 'react'
import {render, fireEvent, getByText, getByPlaceholderText} from "@testing-library/react"
import NewTodoForm from './NewTodoForm'

it('renders without crashing', function (){
    render(<NewTodoForm/>)
})

it('matches snapshot', function(){
    const {getByPlaceholderText, getByText} = render(<NewTodoForm/>)
    
    const todo = getByPlaceholderText('new todo')
    

    
    fireEvent.click(getByText('Add Todo'))

    })