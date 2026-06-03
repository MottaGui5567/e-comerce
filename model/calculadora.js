function somar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "error";
  }
  return a + b;
}

exports.somar = somar;

function subtrair(a, b) {
  return a - b;
}

exports.subtrair = subtrair;

function multiplicar(a, b) {
  return a * b;
}

exports.multiplicar = multiplicar;
