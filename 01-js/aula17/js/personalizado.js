function carConteudo() {
	document.getElementById("conteudo").innerHTML = "<h3>Integer ac pulvinar risus, vel lobortis sapien. Maecenas ut iaculis velit. Fusce diam augue, sodales et purus sed, pharetra rutrum erat.</h3><hr>";
}

function mouseOver() {
	document.getElementById("mouseAlt").innerHTML = "<h3>Retire o mouse</h3>";
}

function mouseOut() {
	document.getElementById("mouseAlt").innerHTML = "<h3>Passe o mouse</h3>";
}

function converTexto() {
	var nome = document.getElementById("nome");
	nome.value = nome.value.toUpperCase();
}

function validarSenha() {
	var senha = document.getElementById("senha").value;

	if (senha == "" || senha.length <= 5) {
		document.getElementById("erroSenha").innerHTML = "<span style='color: #ff0000;'><h3>Preecha o campo senha com minino 6 caracteres</h3></span>";
	} else {
		document.getElementById("erroSenha").innerHTML = "<span style='color: #006400;'><h3>Senha válida</h3></span>";
	}
}