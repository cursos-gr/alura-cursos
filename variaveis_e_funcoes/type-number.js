// tipo number [aula 4]

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica);

// pontos flutuantes - o js consegue fazer operações com números de pontos flutuantes mesmo sem o zero

const numeroPontoFlutuante = 3.3;
const numeroPontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

// NaN = Not a Number (não é número) - é um erro que o js retorna quando a gente tenta fazer uma operação quando um ou dois argumentos apresentados não são números

const alura = "Alura";
console.log(alura * primeiroNumero);
