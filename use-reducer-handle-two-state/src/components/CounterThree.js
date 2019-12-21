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

const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Count:</h1> <h1>{count}</h1><br />
            <button onClick={() => dispatch('INCREMENT')} >Increment</button>
            <button onClick={() => dispatch('DRECEMENT')}>Drecement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>

            <div>
                <h1>Count 2:</h1> <h1>{countTwo}</h1><br />
                <button onClick={() => dispatchTwo('INCREMENT')} >Increment</button>
                <button onClick={() => dispatchTwo('DRECEMENT')}>Drecement</button>
                <button onClick={() => dispatchTwo('RESET')}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree;

// in this component we r handling singe state with multipule reducer.
