var frutas = ["Abacate", "Abacaxi", "Amora", "Açaí", "Cereja", "Figo"];

document.write("<hr><h2>Contar a quantidade de itens no array</h2>");

//Contar a quantidade de itens no array
document.write("<h3>Quantidade de tipo de frutas: " + frutas.length + "</h3>");
console.log("Quantidade de tipo de frutas: " + frutas.length );

document.write("<hr><h2>Acessar primeiro item do Array</h2>");

//Acessar primeiro item do Array
document.write("<h3>Primeiro tipo de fruta: " + frutas[0] + "</h3>");
console.log("Primeiro tipo de fruta: " + frutas[0]);

document.write("<hr><h2>Acessar um item do Array</h2>");

//Acessar um item do Array
document.write("<h3>Acessar o item 2 do array: " + frutas[2] + "</h3>");
console.log("Acessar um item do array: " + frutas[2]);

document.write("<hr><h2>Acessar último item do Array</h2>");

//Acessar último item do Array
document.write("<h3>Último tipo de fruta: " + frutas[frutas.length-1] + "</h3>");
console.log("Último tipo de fruta: " + frutas[frutas.length-1]);


//Adicionar um item ao final do Array
document.write("<hr><h2>Adicionar um item ao final do Array</h2>");
frutas.push("Maça");

//Adicionar ao início do Array mais um item
document.write("<hr><h2></h2>");
frutas.unshift("Kiwi");

//Remover um item do final do Array
document.write("<h2>Remover um item do final do Array</h2>");
frutas.pop();

//Remover do início do Array
document.write("<hr><h2>Remover do início do Array</h2>");
frutas.shift();

//Remover um item pela posição do índice
//frutas.splice(pos, n);
//A partir da posição (pos) em direção ao fim da array
//(n) define o número de itens a se remover
frutas.splice(2, 3);

//Ler o um Array
document.write("<hr><h2>Ler um array</h2>");
frutas.forEach(function(item, indice, array){
    document.write("<h3>" + item + ": " + indice + "</h3>");
	console.log(item, indice);
});

var carros = ["Voyage", "Virtus", "Jetta", "A1", "A2", "A3"];

//Adicionar um item ao final do Array
carros.push("A4");

//Remover um item pela posição do índice
carros.splice(2, 1);

//Ler o um Array
document.write("<hr><h2>Ler outro array</h2>");
carros.forEach(function(item, indice, array){
    document.write("<h3>" + item + ": " + indice + "</h3>");
	console.log(item, indice);
});

document.write("<hr>");
