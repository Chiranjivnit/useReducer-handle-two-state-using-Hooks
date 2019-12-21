import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1

        case 'DRECEMENT':
            return state - 1

        case 'RESET':
            return initialState
        default:
            return state
    }
}

const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count:</h1> {count}
            <button onClick={()=>dispatch('INCREMENT')} >Increment</button>
            <button onClick={()=>dispatch('DRECEMENT')}>Drecement</button>
            <button onClick={()=>dispatch('RESET')}>Reset</button>
        </div>
    )
}

export default CounterOne;

//Normal reducer, use only for understanding purpose how it is working.