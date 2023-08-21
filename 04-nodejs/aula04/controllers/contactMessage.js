//Incluir as Bibliotecas
//Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");

// Chamar a função express
const router = express.Router();

// Criar a rota cadastrar com método post
router.post("/", (req, res) => {
    res.send("<h1>Cadastrar mensagem de contato!</h1>");
});

//Exportar a instrução que está dentro da constante router
module.exports = router;

