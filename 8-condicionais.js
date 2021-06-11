console.log(`Trabalhando com Condicionais`);

//lista Array 
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

listaDeDestinos.push(`Curitiba`) // adicionando item na lista com o push
listaDeDestinos.push(`Paiçandu`) // adicionando item na lista com o push


const idadeComprador = 17;
console.log("Destinos possíveis: ");

if (idadeComprador >= 18) {
    console.log("Comprador Maior de Idade");
    listaDeDestinos.splice(1, 1); // splice, comando para removendo um item da lista   
}

console.log(listaDeDestinos);
