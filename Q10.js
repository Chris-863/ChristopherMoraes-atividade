function calcularHipotenusa(cateto1, cateto2) {
  return (cateto1 ** 2 + cateto2 ** 2) ** (1 / 2);
}
let resultado = calcularHipotenusa(3, 4);
console.log(resultado);
/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  calcularHipotenusa,
};
