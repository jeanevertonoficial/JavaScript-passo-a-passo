console.log(`Trabalhando com Condicionais \n`);

//lista Array 
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

listaDeDestinos.push(`Curitiba`) // adicionando item na lista com o push
listaDeDestinos.push(`Paiçandu`) // adicionando item na lista com o push


const idadeComprador = 10;
const EstaAcompanhado = true;
const passagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos, "\n");
// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de Idade");
//     listaDeDestinos.splice(1, 1); // splice, comando para removendo um item da lista   
// } else if (EstaAcompanhado) {
//     console.log("Comprador é menor de idade e esta acompanhado(a)");
//     listaDeDestinos.splice(1, 1);
// }  else {
//     console.log("Você é menor de idade, venda proibida!!");
// }


if (idadeComprador >= 18 || EstaAcompanhado == true) {
    console.log("Boa viagem !!");
    listaDeDestinos.splice(1, 1); // splice, comando para removendo um item da lista   
} else {
    console.log("É menor de idade, venda proibida!!");
}
console.log(listaDeDestinos, "\n");


console.log("Embarque: ");
if (idadeComprador >= 18 && passagemComprada == true) {
    console.log("Pode embarcar, boa viagem!");
} else {
    console.log("Você não pode embarcar!!");
}
// formatar alt + shift + F