import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe("Pruebas de <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe de mostrar <ConterApp /> correctamente con sus valores por defecto", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el valor por defecto de 10", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const numeroH2 = parseInt(wrapper.find("h2").text());

    expect(numeroH2).toBe(100);
  });

  test("debe de incrementar con el boton +1", () => {
    // const btn1 = wrapper.find('button').at(0);
    wrapper.find("button").at(0).simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("11");
  });

  test("debe de reseteat con el valor de 10", () => {
    // const btn1 = wrapper.find('button').at(0);
    wrapper.find("button").at(1).simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("10");
  });

  test("debe de decrementar con el boton -1", () => {
    // const btn1 = wrapper.find('button').at(0);
    wrapper.find("button").at(2).simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("9");
  });
});
