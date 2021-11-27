import "./counter.css";
import {useState} from "react";

const CounterApp = () => {

    const [ state, setState ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const { counter1, counter2 } = state;

    const handlerIncrease = () => {
        setState( { ...state, counter1: counter1 + 1 });
    };

    console.log(counter1);

    return (
      <>
          {/*<h1>Counter { counter }</h1>*/}
          <h1>Counter1 { counter1 }</h1>
          <h1>Counter2 { counter2 }</h1>
          <hr/>
          <button className="btn btn-primary" onClick={handlerIncrease}>+1</button>
      </>
    );
}

export default CounterApp;
