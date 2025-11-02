function verificarParOuImpar(numero) {
  let resultado = numero % 2 === 0 ? "Par" : "Impar";
  return resultado;
}
console.log(verificarParOuImpar(2));
console.log(verificarParOuImpar(3));
/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  verificarParOuImpar,
};
