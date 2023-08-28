// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
// Incluir o arquivo que possui a conexão com banco de dados
const db = require('../db/models');
// Chamar a função express
const router = express.Router();

// Criar a rota cadastrar com método post
// Endereço para acessar através da aplicação externa: http://localhost:8080/contact-menssage
/*
// A aplicação externa deve indicar que está enviado os dados em formato de objeto: Content-Type: application/json

// Dados em formato de objeto
{
    "name": "Cesar",
    "email": "cesar@celke.com.br",
    "subject": "Assunto",
    "content": "Conteúdo"
}
*/
router.post("/", async (req, res) => {

    // Receber os dados enviados no corpo da requisição
    var data = req.body;

    // Salvar no banco de dados
    await db.ContactsMsgs.create(data)
    .then((dataContactsMsgs) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso!",
            dataContactsMsgs
        });
    }).catch(() => {
        return res.status(400).json({
            error: true,
            message: "Erro: Mensagem não cadastrada com sucesso!"
        });
    });
});

// Exportar a instrução que está dentro da constante router 
module.exports = router;