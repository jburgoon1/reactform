import React from 'react'
import {render, fireEvent, getByText, getByPlaceholderText} from "@testing-library/react"
import BoxForm from './BoxForm'

it('renders without crashing', function (){
    render(<BoxForm/>)
})

it('matches snapshot', function(){
    const {getByPlaceholderText, getByText} = render(<BoxForm/>)
    
    const width = getByPlaceholderText('width')
    const height = getByPlaceholderText('height')
    const backgroundColor = getByPlaceholderText('Background Color')

    fireEvent.input(width, '100px')
    fireEvent.input(height, '100px')
    fireEvent.input(backgroundColor, 'blue')
    fireEvent.click(getByText('Make a new box!'))

    })