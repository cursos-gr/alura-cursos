console.log("Atribuição de Variaveis");

//const idade = 18;
let primeiroNome = "Guilherme";
//const nome = "Guilherme"; const nome (declaração) - = "Guilherme" (atribuição)
const sobrenome = "Ribeiro";

//console.log(nome + " " + sobrenome);
//const - uma variável constante que nunca muda
//let - uma variável que pode ter mudanças em um bloco de código com seu uso
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); //Melhor uso para concatenar texto é com uma template string

let contador = 0; //Declarando uma variável (let) = 0 (atribuição)
contador = contador + 1;

const nomeCompleto = primeiroNome +  sobrenome;

console.log(nomeCompleto);
nomeCompleto = 2;


let idade; // Declarando variável
idade = 18; // Atribuindo valor
idade = idade + 1;
console.log(idade);