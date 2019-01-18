'use strict' //força o js a ser mais criterioro, ex: variavel, ponto e vírgula

//importar o http, debug e o express
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = 3010;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

server.listen(port);
console.log('API rodando na porta ' + port);