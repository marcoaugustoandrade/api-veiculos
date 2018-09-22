const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || '3005';
const morgan = require('morgan');
const cors = require('cors');

// Configurando
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(morgan('combined'));
app.use(cors());

// Rotas
const index = require('./routes/index');
app.use('/', index);
const veiculoRouter = require('./routes/veiculoRouter');
app.use('/veiculos', veiculoRouter);
const reservaRouter = require('./routes/reservaRouter');
app.use('/reservas', reservaRouter);

// Subindo o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});