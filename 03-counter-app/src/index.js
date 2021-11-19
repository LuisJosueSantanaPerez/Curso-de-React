import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PrimeraApp from "./PrimeraApp";

// Components
// import CounterApp from "./CounterApp";

const divRoot = document.querySelector("#root");
ReactDOM.render(<PrimeraApp  saludo="Hola soy Goku"/> , divRoot);
// ReactDOM.render(<CounterApp value={0}/> , divRoot);



