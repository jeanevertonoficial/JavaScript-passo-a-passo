console.log(`\n Trabalhando com Condicionais \n`);

//lista Array 
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

listaDeDestinos.push(`Curitiba`) // adicionando item na lista com o push
listaDeDestinos.push(`Paiçandu`) // adicionando item na lista com o push


const idadeComprador = 25;
const EstaAcompanhado = false;
let passagemComprada = false;
const destinoDaViagem = "Maringá";

console.log("Destinos possíveis: ");
console.log(listaDeDestinos, "\n");


const podeCompar = idadeComprador >= 18 || EstaAcompanhado == true;


let contador = 0;
let destinoExiste = false;
console.log(`Verificando se o destino para ${destinoDaViagem}, esta disponivel`);
// condição while
while (contador < 3) {

    if (listaDeDestinos[contador] == destinoDaViagem) {
        console.log("Disponivel, destino encontrado");
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log(`Destino existe: ${destinoExiste}`);

if (podeCompar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe ocorreu um erro");
}

// condição For
for ( let cont = 0; cont < 3 ; cont++) {
    if (listaDeDestinos[contador] == destinoDaViagem){
        destinoExiste = true;
        break;
    }
    
}