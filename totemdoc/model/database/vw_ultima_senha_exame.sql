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
        sen.idsenha = (SELECT 
                MAX(sen.idsenha)
            FROM
                totemdb.senha sen
            WHERE
                sen.idprioridade = pri.idprioridade
                    AND DATE_FORMAT(sen.senha_emissao, '%Y-%m-%d') = DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%d'))
    ORDER BY pri.prioridade_ordem ASC , sen.idsenha DESC