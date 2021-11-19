import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Components
import CounterApp from "./CounterApp";
// import PrimeraApp from "./PrimeraApp";

const divRoot = document.querySelector("#root");
// ReactDOM.render(<PrimeraApp  saludo="Hola soy Goku"/> , divRoot);
ReactDOM.render(<CounterApp /> , divRoot);



