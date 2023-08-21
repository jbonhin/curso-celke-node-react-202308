var nota = 8;
var falta = 27;

if((nota < 4) || (falta > 25)){
    document.write("<h3>Reprovado: " + nota + ". Falta: " + falta + "</h3>");
}

nota = 3;
falta = 27;
if((nota < 4) && (falta > 25)){
    document.write("<h3>Reprovado: " + nota + ". Falta: " + falta + "</h3>");
}

var situacao = !true;
document.write("<h2>Situação: " + situacao + "</h2>");