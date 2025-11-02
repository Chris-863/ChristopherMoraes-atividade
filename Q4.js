function dividir(a, b) {
  let resultado = (b && a / b) || "Erro: divisão por zero";
  return resultado;
}

let resultado = dividir(4, 2);
console.log(resultado);
/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  dividir,
};
