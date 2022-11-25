CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `usr_totem`@`%` 
    SQL SECURITY DEFINER
VIEW `vw_quantidade_senhas_atendidas` AS
    SELECT 
        DATE_FORMAT(ate.atendimento_final, '%Y-%m-%d') AS 'DATA_ATENDIMENTO',
        pri.prioridade_descricao AS 'PRIORIDADE',
        COUNT(sen.idsenha) AS 'CONTAGEM_SENHAS'
    FROM
        totemdb.atendimento ate
            INNER JOIN
        totemdb.senha sen ON sen.idsenha = ate.idsenha
            INNER JOIN
        totemdb.prioridade pri ON pri.idprioridade = sen.idprioridade
    GROUP BY DATE_FORMAT(ate.atendimento_final, '%Y-%m-%d') , pri.prioridade_descricao
    ORDER BY DATE_FORMAT(ate.atendimento_final, '%Y-%m-%d') DESC , pri.prioridade_descricao ASC