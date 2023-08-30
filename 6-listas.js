console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listasDeDestinos = new Array( // Um Array sempre começa na contagem do zero
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listasDeDestinos.push(`Cianorte`); // O Push adiciona elementos na lista/array

console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(listasDeDestinos);

listasDeDestinos.splice(1,1); // O Splice remove um elemento passando a posição dele
console.log(listasDeDestinos);

console.log(listasDeDestinos[1], listasDeDestinos[0]);
