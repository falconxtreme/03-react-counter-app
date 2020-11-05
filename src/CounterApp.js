import React, { useState } from "react";
import PropTypes from "prop-types";

//Functional Component
const CounterApp = ({ value }) => {
  // const state = useState('Goku');
  // console.log(state);
  // const [nombre, setNombre] = useState("Goku");
  // console.log(nombre, setNombre);
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  const handleReset = (e) => {
    setCounter(value);
  };

  const handleSubstract = (e) => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 10,
};

export default CounterApp;
