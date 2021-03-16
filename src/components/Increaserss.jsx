import React, {useReducer} from 'react'


const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increase' :
            return state + 1

            case 'decrease' :
                return state - 1
                default : 
                return state
    }
    
}


function Increaserss() {
    const [counter, dispatch] = useReducer(reducer, initialState)

    const addOne = () => {
        return dispatch('increase')
    }

    const reMoveOne = () => {
        return dispatch ('decrease')
    }


    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={addOne}>AddMore</button>
            <button onClick={reMoveOne}>RemoveOne</button>
        </div>
    )
}

export default Increaserss
