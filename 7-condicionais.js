console.log(`Trabalhando com condicionais`);

const listasDeDestinos = new Array( //sempre começa na contagem do zero
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);

const idadeComprador = 18;
const estaAcompanhada = false; // tipo booleano - true ou false
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listasDeDestinos);

// if (idadeComprador >= 18) { // se maior de idade pode comprar
//     console.log("Comprador maior de idade");
//     listasDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado");
//     listasDeDestinos.splice(1, 1); // removendo item
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }
    

if (idadeComprador >= 18 || estaAcompanhada == true){     //|| = ou
        console.log("Boa Viagem!!");
        listasDeDestinos.splice(2, 1); // removendo item
    } else {
        console.log("Não é maior de idade e não posso vender");
    }
console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!!");
}else{
    console.log("Você não pode embarcar!");
}

console.log(listasDeDestinos);






/* Documentação/Exemplos para Novos Alunos: */

// console.log(idadeComprador > 18); // maior que
// console.log(idadeComprador < 18); // menor que
// console.log(idadeComprador <= 18); // menor ou igual
// console.log(idadeComprador >= 18); // maior ou igual
// console.log(idadeComprador == 18); // igual a - tem que ser == duplo (comparação de 2 valores)
// || ou
// && e

// O que aprendi nessa aula?
// If e Else

// Operadores lógicos

// if encadeado

// else if

//&& e ||

