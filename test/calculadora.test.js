const calculadora = require("../model/calculadora");

test("somar 2+2 deve ser 4", () => {
  const resultado_soma = calculadora.somar(2, 2);
  expect(resultado_soma).toBe(4);
});

test("subtrair 5-3 deve ser 2", () => {
  const resultado_subtracao = calculadora.subtrair(5, 3);
  expect(resultado_subtracao).toBe(2);
});

test("multiplicar 4*3 deve ser 12", () => {
  const resultado_multiplicacao = calculadora.multiplicar(4, 3);
  expect(resultado_multiplicacao).toBe(12);
});

test("receber string e retornar error ", () => {
  const resultao_soma = calculadora.somar(2, "aaaaaaaaaaa");
  expect(resultao_soma).toBe("error");
});
