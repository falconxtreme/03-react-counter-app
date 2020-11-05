import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar hola Eder", () => {
    const nombre = "Eder";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola Eder");
  });

  test("getSaludo debe retornar hola Carlos sin argumento", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos");
  });
});
