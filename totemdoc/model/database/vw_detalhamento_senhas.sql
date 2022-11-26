CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `usr_totem`@`%` 
    SQL SECURITY DEFINER
VIEW `vw_detalhamento_senhas` AS
    SELECT 
        sen.senha_numeracao,
        sen.senha_emissao,
        pri.prioridade_descricao,
        ate.atendimento_inicio,
        ate.atendimento_final,
        gui.guiche_descricao
    FROM
        totemdb.senha sen
            LEFT JOIN
        totemdb.prioridade pri ON pri.idprioridade = sen.idprioridade
            LEFT JOIN
        totemdb.atendimento ate ON ate.idsenha = sen.idsenha
            LEFT JOIN
        totemdb.guiche gui ON gui.idguiche = ate.idguiche
    WHERE
        pri.idprioridade IS NOT NULL
    ORDER BY DATE_FORMAT(ate.atendimento_final, '%Y-%m-%d') DESC , pri.prioridade_descricao ASC , sen.senha_numeracao DESC