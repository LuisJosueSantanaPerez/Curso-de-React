import { useState  } from "react";
import PropTypes from "prop-types";


// functional component
const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value) // []

    // handleAdd
    const handleAdd = () => setCounter( counter + 1); // setCounter( (c) => c + 1);
    const handleReset = () =>  setCounter(value);
    const handleSubtract = () => setCounter( () => counter === 0? value :  counter - 1);
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    );
}

// Props
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

// Props default
CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;
