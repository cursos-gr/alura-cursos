console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array( // Um Array sempre começa na contagem do zero
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhado = false; // type boolean - true ou false
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;     

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe, tivemos um erro");
}

for(let cont = 0; cont<3; cont++){ // Geralmente é usado o i let i = 0; i<3; i++
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        
    }

}
