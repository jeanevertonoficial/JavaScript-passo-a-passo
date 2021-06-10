// JS é case sensitive 
console.log("Trabalhando com Atribuição de Variável");

const primeiroNome = "Jean"; // let pode mudar de estado
const sobremome = "Everton"; // const não muda 

//dois jeitos de deixar espaço entre variáveis
console.log(primeiroNome, sobremome);
console.log(primeiroNome + " " + sobremome);

console.log(`Meu nome é ${primeiroNome} ${sobremome}`); // jeito mais legivel 

const nomeCompleto = primeiroNome + sobremome; // atribuindo nome e sobrenome a variavel nome completo, assim é aceito a const nas variaveis 

console.log(nomeCompleto);