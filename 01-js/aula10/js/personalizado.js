var nota = 5;

if(nota >= 7){
	document.write("<h3>Aprovado: " + nota + "</h3>");
}else if((nota < 7) && (nota >= 4)){
	document.write("<h3>Recuperação: " + nota + "</h3>");
}else{
	document.write("<h3>Reprovado: " + nota + "</h3>");
}

var sol = false;
var nublado = false;

if(sol){
	document.write("<h3>Vamos para praia porque tem sol!</h3>");
}else if(nublado){
	document.write("<h3>Vamos para o parque!</h3>");
}else{
	document.write("<h3>Vamos ficar em casa estudando JavaScript!</h3>");
}