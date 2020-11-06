import React, { Fragment } from "react";
import PropTypes from "prop-types";

//FC
const PrimeraApp = ({ saludo, subtitulo }) => {
  // const saludo = {
  //   nombre: "Eder",
  //   edad: 33,
  // };
  // console.log(props);
  // const saludo = "Hola Mundo";

  return (
    <>
      <h1> {saludo}! </h1>
      {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
