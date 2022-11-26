/**
 * @file HandleDBMSMySQL.js Arquivo da classe para manipulação do banco de dados MySQL
 * @author João Ferreira <joaoferreirape@gmail.com>
 */
const config = require('config');
const mysql = require('mysql');



/**
 * Classe para conexão com o banco de dados MySQL
 * @class
 */
class HandleDBMSMySQL {



    /**
     * @description Classe para conexão com o banco de dados MySQL
     * @constructs HandleDBMSMySQL
     * @param {} [void] Esta função não possui parâmetros
     * @returns {void} Esta função não possui retorno
     * @memberof HandleDBMSMySQL
     */
    constructor() {
        this.connect();
    }



    /**
     * @description Abre a conexão com o banco de dados
     * @param {} [void] Esta função não possui parâmetros
     * @returns {void} Esta função não possui retorno
     * @memberof HandleDBMSMySQL
     */
    connect() {
        this.connection = mysql.createConnection(config.get('MySQL'));
    }



    /**
     * @description Envia um insert para o banco de dados e retorna um objeto JSON
     * @param {string} [sql] Insert no formato SQL
     * @param {string} [args] Parâmetro opcional
     * @returns {object} Resolve com a mensagem de retorno do SGBD
     * @memberof HandleDBMSMySQL
     */
    insert(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }



    /**
     * @description Envia a consulta SQL para o banco de dados e retorna um objeto JSON
     * @param {string} [sql] Query no formato SQL
     * @param {string} [args] Parâmetro opcional
     * @returns {object} Resolve o resultset da consulta SQL em um objeto JSON no formato: { 'metadata': {}, 'data': {} }
     * @memberof HandleDBMSMySQL
     */
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results, fields) => {
                if (err) {
                    reject(err);
                } else {
                    var resultsJSON         = { 'metadata': {}, 'data': {} };
                    resultsJSON.metadata    = fields.map((r) => Object.assign({}, r));
                    resultsJSON.data        = results.map((r) => Object.assign({}, r));
                    resolve(resultsJSON);
                }
            });
        });
    }



    /**
     * @description Envia um update para o banco de dados e retorna um objeto JSON
     * @param {string} [sql] Update no formato SQL
     * @param {string} [args] Parâmetro opcional
     * @returns {object} Resolve com a mensagem de retorno do SGBD
     * @memberof HandleDBMSMySQL
     */
    update(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }



    /**
     * @description Envia um delete para o banco de dados e retorna um objeto JSON
     * @param {string} [sql] Delete no formato SQL
     * @param {string} [args] Parâmetro opcional
     * @returns {object} Resolve com a mensagem de retorno do SGBD
     * @memberof HandleDBMSMySQL
     */
    delete(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }



    /**
     * @description Fecha a conexão com o banco de dados
     * @param {} [void] Esta função não possui parâmetros
     * @returns {void} Esta função não possui retorno
     * @memberof HandleDBMSMySQL
     */
    async close() {
        await this.connection.end(err => {
            if (err) {
                process.exit(1);
            }
        });
    }

}



module.exports = HandleDBMSMySQL;
