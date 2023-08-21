var valorUm = 8;
var valorDois = 3; 

document.write("<h2>Valor Um: " + valorUm + "</h2>");
document.write("<h2>Valor Dois: " + valorDois + "</h2><br>");

valorUm += valorDois;
//valorUm = valorUm + valorDois;
document.write("<h3>Operador de Atribuição com Soma: " + valorUm + "</h3>");

valorUm = 8;
valorUm -= valorDois;
//valorUm = valorUm - valorDois;
document.write("<h3>Operador de Atribuição com Subtração: " + valorUm + "</h3>");

valorUm = 8;
valorUm *= valorDois;
//valorUm = valorUm * valorDois;
document.write("<h3>Operador de Atribuição com Multiplicação: " + valorUm + "</h3>");

valorUm = 8;
valorUm /= valorDois;
//valorUm = valorUm / valorDois;
document.write("<h3>Operador de Atribuição com Divisão: " + valorUm + "</h3>");

valorUm = 8;
valorUm %= valorDois;
//valorUm = valorUm % valorDois;
document.write("<h3>Operador de Atribuição com Módulo: " + valorUm + "</h3>");