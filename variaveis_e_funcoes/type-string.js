// type string

const texto1 =  "Olá mundo!";
const texto2 =  'Olá mundo!';

// mesmo se tiver números junto a letras, ele considera como string
const senha = "senhaSuperSegura456!";
// mesmo tendo apenas números dentro de aspas, o js interpreta como string
const stringDeNumeros = "123456";

const citacao1 = 'O Gr disse "oi!"';
const citacao2 = "O Gr disse 'tchau!'";
console.log(citacao1);
console.log(citacao2);

const frase = "Meu nome é ";
const meuNome = "Guilherme";

// concatenação (+)
console.log(frase + meuNome);

// template string ou template literal ( é possível executar comandos ou chamar variáveis junto com texto ao invés de concatena-las )
const meuApelido = "Gr";

// (essa parte da aula fiz sozinho)
console.log(`Meu apelido é ${meuApelido}`);
