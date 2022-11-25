CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `usr_totem`@`%` 
    SQL SECURITY DEFINER
VIEW `vw_quantidade_senhas_emitidas` AS
    SELECT 
        DATE_FORMAT(sen.senha_emissao, '%Y-%m-%d') AS 'DATA_EMISSAO',
        pri.prioridade_descricao AS 'PRIORIDADE',
        COUNT(sen.idsenha) AS 'CONTAGEM_SENHAS'
    FROM
        totemdb.senha sen
            INNER JOIN
        totemdb.prioridade pri ON pri.idprioridade = sen.idprioridade
    GROUP BY DATE_FORMAT(sen.senha_emissao, '%Y-%m-%d') , pri.prioridade_descricao
    ORDER BY DATE_FORMAT(sen.senha_emissao, '%Y-%m-%d') DESC , pri.prioridade_descricao ASC