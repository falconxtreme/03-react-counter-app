import React from "react";
// import { getByText, render } from "@testing-library/react";
import PrimeraApp from "../PrimerApp";
import { shallow } from "enzyme";

describe("pruebas en <PrimeraApp />", () => {
  // test('debe mostrar el mensaje "Hola, soy Goku"', () => {
  //   const saludo = "Hola, soy Goku";

  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test("debe de mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, Soy Goku";
    const subtitulo = "El subtitulo del año";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text();
    // console.log(textoParrafo);
    // document.querySelector();

    expect(textoParrafo).toBe(subtitulo);
  });
});
