import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 5
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state,firstCounter: state.firstCounter + action.value }

        case 'DRECEMENT':
            return { ...state,firstCounter: state.firstCounter - action.value }

        case 'INCREMENT2':
            return { ...state,secondCounter: state.secondCounter + action.value }

        case 'DRECEMENT2':
            return { ...state,secondCounter: state.secondCounter - action.value }

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
            <h1>Count:</h1> <h1>{count.firstCounter}</h1> <br />
            <button onClick={() => dispatch({ type: 'INCREMENT', value: 1 })} >Increment</button>
            <button onClick={() => dispatch({ type: 'DRECEMENT', value: 1 })}>Drecement</button>
            <h1>Count:</h1> <h1>{count.secondCounter}</h1> <br />
            <button onClick={() => dispatch({ type: 'INCREMENT2', value: 5 })} >INCREMENT2 By 5</button>
            <button onClick={() => dispatch({ type: 'DRECEMENT2', value: 5 })}>DRECEMENT2 By 5</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default CounterOne;

// just focus on , how to handle multiple state with single reducer in one component and how to pass payload to reducer.
// we can change two state value indivisualy using reducer through passing payload. 
// so here we use normal single reducer but handling multiple state like firstCounter nd secondCounter.
// And our reducer returning object because we can set a payload to our reducer.instead of hard code value 
// we can send payload to our reducer, which can easyly handle after every changes
// this is called dynamic.
