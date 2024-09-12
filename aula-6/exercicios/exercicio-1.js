
// # Exercicio 1

// - Crie um array com 10 nomes diferentes
// - Escreva uma função chamada "nomeNaPosicao"
// - A função recebe como parâmetro um número
// - Usando console.log, escreva o nome que está na posição fornecida para a função

// Exemplo:

//     var nomes = ["Pedro", "Andre", "Fernanda", "Marcela", "Daniele"];
//     nomeNaPosicao(2);

//  Deverá escrever "Fernanda"


let nomes = ["Tayrone", "José", "Maria", "Carlos", "Daniele", "Davi", "Carolina", "Stephanie", "Daniel", "Gabriel"]
function nomeNaPosicao(num){    
    console.log(nomes[num - 1])
}

nomeNaPosicao(2)
//Coloquei o valor com num - 1 pois é padrão as pessoas colocarem em posições começando pelo 1 e não pelo 0 que é o padrão das linguagens. 