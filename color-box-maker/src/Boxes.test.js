import React from 'react'
import {render} from "@testing-library/react"
import Boxes from './Boxes'

it('renders without crashing', function (){
    render(<Boxes/>)
})

it('matches snapshot', function(){
    const {asFragment} = render(<Boxes/>)
    expect(asFragment()).toMatchSnapshot()
    
    })
it('matches snapshot', function(){
    const {asFragment} = render(<Boxes width='100px' height='100px' backgroundColor='blue'/>)
    expect(asFragment()).toMatchSnapshot()
    
    })