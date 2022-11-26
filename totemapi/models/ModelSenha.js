/**
 * @file ModelSenha.js Arquivo da classe para modelo de dados da senha
 * @author João Ferreira <joaoferreirape@gmail.com>
 */
const HandleDBMSMySQL = require('../config/database/HandleDBMSMySQL');



/**
 * Classe para modelo de dados da senha
 * @class
 */
class ModelSenha {



    /**
     * @description Classe para modelo de dados da senha
     * @constructs ModelSenha
     * @param {} [void] Esta função não possui parâmetros
     * @returns {void} Esta função não possui retorno
     * @memberof ModelSenha
     */
    constructor() {
        this._HandleDBMSMySQL = new HandleDBMSMySQL();
    }



    /**
     * @description Destroy o objeto em caso de erro nos parâmetros
     * @param {object} [param] Parâmetro incorreto que provoca falha na construção do objeto
     * @returns {error} Envia erro para o console
     * @memberof ModelSenha
     */
    destroy() {
        var varToString = varObj => Object.keys(varObj)[0];
        new Error('Parâmetros incorretos para a classe: \`%s\`, parâmetro \`%s\`', this.constructor.name, varToString({ param }));
    }



    /**
     * @description Retorna o detalhamento de senhas em um objeto JSON
     * @param {} [void] Esta função não possui parâmetros
     * @returns {object} Resolve o resultset da consulta SQL em um objeto JSON no formato: { 'metadata': {}, 'data': {} }
     * @memberof ModelSenha
     */
    getDetalhamentoSenhas() {
        var sql = `select * from vw_detalhamento_senhas`;
        return this._HandleDBMSMySQL.query(sql);
    }



    /**
     * @description Retorna as senhas emitidas em um objeto JSON
     * @param {} [void] Esta função não possui parâmetros
     * @returns {object} Resolve o resultset da consulta SQL em um objeto JSON no formato: { 'metadata': {}, 'data': {} }
     * @memberof ModelSenha
     */
    getSenhasEmitidas() {
        var sql = `select * from vw_quantidade_senhas_emitidas`;
        return this._HandleDBMSMySQL.query(sql);
    }



    /**
     * @description Retorna as senhas atendidas em um objeto JSON
     * @param {} [void] Esta função não possui parâmetros
     * @returns {object} Resolve o resultset da consulta SQL em um objeto JSON no formato: { 'metadata': {}, 'data': {} }
     * @memberof ModelSenha
     */
    getSenhasAtendidas() {
        var sql = `select * from vw_quantidade_senhas_atendidas`;
        return this._HandleDBMSMySQL.query(sql);
    }



    /**
     * @description Retorna a última senha de exame emitida em um objeto JSON
     * @param {} [void] Esta função não possui parâmetros
     * @returns {object} Resolve o resultset da consulta SQL em um objeto JSON no formato: { 'metadata': {}, 'data': {} }
     * @memberof ModelSenha
     */
    getUltimaExame() {
        var sql = `select * from vw_ultima_senha_exame`;
        return this._HandleDBMSMySQL.query(sql);
    }



    /**
     * @description Retorna a última senha prioritária emitida em um objeto JSON
     * @param {} [void] Esta função não possui parâmetros
     * @returns {object} Resolve o resultset da consulta SQL em um objeto JSON no formato: { 'metadata': {}, 'data': {} }
     * @memberof ModelSenha
     */
    getUltimaPrioritaria() {
        var sql = `select * from vw_ultima_senha_prioritaria`;
        return this._HandleDBMSMySQL.query(sql);
    }



    /**
     * @description Retorna a última senha geral emitida em um objeto JSON
     * @param {} [void] Esta função não possui parâmetros
     * @returns {object} Resolve o resultset da consulta SQL em um objeto JSON no formato: { 'metadata': {}, 'data': {} }
     * @memberof ModelSenha
     */
    getUltimaGeral() {
        var sql = `select * from vw_ultima_senha_geral`;
        return this._HandleDBMSMySQL.query(sql);
    }

}



module.exports = ModelSenha;
