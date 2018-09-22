const express = require('express');
const router = express.Router();
const conexao = require('../config/conexao');

router.get('/', (req, res) => {

    const query = 'select * from veiculos';
    conexao.query(query, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });

});

router.get('/:id', (req, res) => {

    const id = req.params.id;
    
    const query = 'select * from veiculos where id = ? ';
    conexao.query(query, [id], (err, rows) => {
        res.json(rows);
    });

});

router.post('/', (req, res) => {
    
    const marca = req.body.marca;
    const modelo = req.body.modelo;
    const placa = req.body.placa;
    const ano = req.body.ano;

    const query = 'insert into veiculos (marca, modelo, placa, ano) values (?, ?, ?, ?)';
    conexao.query(query, [marca, modelo, placa, ano], (err, rows) => {
        res.json({
            message: "Veículo cadastrado"
        });
    });

});

router.put('/:id', (req, res) => {

    const id = req.params.id;
    const marca = req.body.marca;
    const modelo = req.body.modelo;
    const placa = req.body.placa;
    const ano = req.body.ano;

    const query = 'update veiculos set marca = ?, modelo = ?, placa = ?, ano = ? where id = ?';
    conexao.query(query, [marca, modelo, placa, ano, id], (err, row) => {
        res.json({
            message: "Veículo alterado"
        });
    });

});

router.delete('/:id', (req, res) => {

    const id = req.params.id;
    
    const query = 'delete from veiculos where id = ?';
    conexao.query(query, [id], (err, row) => {
        res.json({
            message: "Veículo excluído"
        })
    })

});

module.exports = router;