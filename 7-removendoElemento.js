console.log(`Trabalhando com Lista Removendo Elemento`);

//lista Array 
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

listaDeDestinos.push(`Curitiba`) // adicionando item na lista com o push
listaDeDestinos.push(`Paiçandu`) // adicionando item na lista com o push
listaDeDestinos.push(`Maringá`) // adicionando item na lista com o push
listaDeDestinos.push(`Sarandi`) // adicionando item na lista com o push
listaDeDestinos.push(`Marialva`) // adicionando item na lista com o push

console.log("Destinos possíveis: ");
// console.log(salvador, SaoPaulo, rioDeJaneiro);

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // splice, comando para removendo um item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); // mostrando somente um elemtento da lista array

listaDeDestinos.pop(); // removendo o ultimo elemtendo da lista 
console.log(listaDeDestinos);
