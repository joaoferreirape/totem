CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `usr_totem`@`%` 
    SQL SECURITY DEFINER
VIEW `vw_ultima_senha_exame` AS
    SELECT 
        sen.idsenha,
        sen.senha_numeracao,
        sen.senha_emissao,
        pri.idprioridade,
        pri.prioridade_ordem,
        pri.prioridade_descricao
    FROM
        totemdb.senha sen
            INNER JOIN
        totemdb.prioridade pri ON pri.idprioridade = sen.idprioridade
            AND pri.idprioridade = 1
    WHERE
        sen.idsenha NOT IN (SELECT 
                ate.idsenha
            FROM
                totemdb.atendimento ate)
    GROUP BY sen.idsenha , sen.senha_numeracao , sen.senha_emissao , pri.idprioridade , pri.prioridade_ordem , pri.prioridade_descricao
    HAVING MAX(sen.senha_numeracao)
    ORDER BY pri.prioridade_ordem ASC , sen.idsenha DESC