import React, {useReducer} from 'react'


const initialState = 0
const reducer = (state, action) => {
   switch(action) {
       case 'increase':
           return state + 1

           case 'decrease' :
               return state - 1

               default :
               return state

   }
}


function ReducerUse() {

    const [count, dispatch] = useReducer(reducer, initialState)


    const inc = () => {
        return dispatch('increase')
    }


    const dcre = () => {
        return dispatch('decrease')
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Increase</button>
            <button onClick={dcre}>Decrease</button>
        </div>
    )
}

export default ReducerUse
