// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

// Incluir as Controllers
const home = require("./controllers/home");
const contactMessage = require("./controllers/contactMessage");
const contactMenssage = require("./controllers/contactMessage");


// Criar as rotas
app.use('/home', home);
app.use('/contact-message', contactMessage);
app.use('/contact-menssage', contactMenssage);


// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});