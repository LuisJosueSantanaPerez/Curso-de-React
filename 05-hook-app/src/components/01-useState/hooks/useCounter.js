import {useState} from "react";

export const useCounter = (initialState = 10 ) => {
    const [state, setState]  = useState(initialState); // 10

    const increment = (factor = 1) => {
        setState( state + factor);
    }

    const descrement = (factor = 1) => {
        setState( state - factor);
    }

    const reset = () => {
        setState(initialState);
    }

    return {
        state,
        increment,
        descrement,
        reset
    };

}
