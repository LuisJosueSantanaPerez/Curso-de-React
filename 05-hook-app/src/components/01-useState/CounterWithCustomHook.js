import "./counter.css";
import {useCounter} from "./hooks/useCounter";

const CounterWithCustomHook = () => {
    const { state, increment, descrement, reset } = useCounter(100);
    return (
      <>
        <h1>Counter with Hook: { state }</h1>
          <hr/>
          <button className="btn btn-primary" onClick={ () => increment(2)}>+1</button>
          <button className="btn btn-dark" onClick={reset}>Reset</button>
          <button className="btn btn-danger" onClick={()=> descrement(2)}>-1</button>
      </>
    );
}

export default CounterWithCustomHook;
