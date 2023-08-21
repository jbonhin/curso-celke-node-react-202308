var cadeira = {
	cor: "Preta",
	altura: 118,
	largura: 74,
	profundidade: 64
};

 document.write("<h3>Cor da cadeira " + cadeira.cor + "</h3>");
 document.write("<h3>Altura da cadeira " + cadeira.altura + "</h3><br>");

cadeira.cor = "Branca";
 document.write("<h3>Cor da cadeira " + cadeira.cor + "</h3><br>");

cadeira.peso = 17;
 document.write("<h3>Peso da cadeira " + cadeira.peso + "</h3><br>");

 document.write("<h3>Profundidade da cadeira " + cadeira.profundidade + "</h3>");
delete cadeira.profundidade;
 document.write("<h3>Profundidade da cadeira " + cadeira.profundidade + "</h3><hr>");

var mesa = new Object();
mesa.cor = "Preta";
mesa.largura = 220;
 document.write("<h3>Cor da mesa " + mesa.cor + "</h3>");
 document.write("<h3>Largura da mesa " + mesa.largura + "cm</h3>");
