import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'

import Hello from './hello'

let container = null
beforeEach(() => {
    // setyp a DOM element as a render target
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(()=>{
    //cleanup on exiting
    unmountComponentAtNode(container)
})

it(`render with or without a name`, () => {
    act(()=> {
        render(<Hello />, container)
    })
    expect(container.textContent).toBe("Hey, stranger")

    act(() => {
        render(<Hello name='Arnaud'/>, container)
    })
    expect(container.textContent).toBe("Hello, Arnaud!")
})