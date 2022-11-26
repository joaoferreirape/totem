var express = require('express');
var router = express.Router();

var ModelSenha = require('../models/ModelSenha');
var _ModelSenha = new ModelSenha();



router.route('/')
    .get(function(req, res, next) {
        _ModelSenha.getDetalhamentoSenhas()
            .then(resultsJSON => {
                res.status(200).json(resultsJSON).end();
            })
            .catch(err => {
                console.error('Erro na requisição \`get\` para o recurso: ' + err);
                res.status(500).send(err).end();
            });
    })
    .post(function (req, res) {
        res.send('Pela natureza de funcionalidade desta rota, não há ação de criação.').status(501).end();
    })
    .put(function(req, res) {
        res.send('Pela natureza de funcionalidade desta rota, não há ação de atualização.').status(501).end();
    })
    .delete(function(req, res) {
        res.send('Pela natureza de funcionalidade desta rota, não há ação de apagar/deletar.').status(501).end();
    });



router.route('/emitidas')
    .get(function (req, res) {
        _ModelSenha.getSenhasEmitidas()
            .then(resultsJSON => {
                res.status(200).json(resultsJSON).end();
            })
            .catch(err => {
                console.error('Erro na requisição \`get\` para o recurso: ' + err);
                res.status(500).send(err).end();
        })
    });



router.route('/atendidas')
    .get(function (req, res) {
        _ModelSenha.getSenhasAtendidas()
            .then(resultsJSON => {
                res.status(200).json(resultsJSON).end();
            })
            .catch(err => {
                console.error('Erro na requisição \`get\` para o recurso: ' + err);
                res.status(500).send(err).end();
            })
    });



router.route('/ultima/exame')
    .get(function (req, res) {
        _ModelSenha.getUltimaExame()
            .then(resultsJSON => {
                res.status(200).json(resultsJSON).end();
            })
            .catch(err => {
                console.error('Erro na requisição \`get\` para o recurso: ' + err);
                res.status(500).send(err).end();
            })
    });



router.route('/ultima/prioritaria')
    .get(function (req, res) {
        _ModelSenha.getUltimaPrioritaria()
            .then(resultsJSON => {
                res.status(200).json(resultsJSON).end();
            })
            .catch(err => {
                console.error('Erro na requisição \`get\` para o recurso: ' + err);
                res.status(500).send(err).end();
            })
    });



router.route('/ultima/geral')
    .get(function (req, res) {
        _ModelSenha.getUltimaGeral()
            .then(resultsJSON => {
                res.status(200).json(resultsJSON).end();
            })
            .catch(err => {
                console.error('Erro na requisição \`get\` para o recurso: ' + err);
                res.status(500).send(err).end();
            })
    });



router.route('/nova/exame')
    .put(function (req, res) {
        res.send('Implementar a criação de nova senha de exame.').status(201).end();
    });



router.route('/nova/prioritaria')
    .put(function (req, res) {
        res.send('Implementar a criação de nova senha prioritaria.').status(201).end();
    });



router.route('/nova/geral')
    .put(function (req, res) {
        res.send('Implementar a criação de nova senha geral.').status(201).end();
    });



module.exports = router;
