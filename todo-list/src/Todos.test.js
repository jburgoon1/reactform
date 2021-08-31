import React from 'react'
import {render} from "@testing-library/react"
import Todos from './Todos'

it('renders without crashing', function (){
    render(<Todos/>)
})

