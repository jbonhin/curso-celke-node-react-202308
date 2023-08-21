//Incluir as Bibliotecas
//Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");

// Chamar a função express
const router = express.Router();

// Criar a rota visualizar com método get
router.get("/", (req, res) => {
    res.send("<h1>Conteúdo da página inicial!</h1>");
});

//Exportar a instrução que está dentro da constante router
module.exports = router;

