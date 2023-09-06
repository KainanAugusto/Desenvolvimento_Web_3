const db = require("../../../database/databaseconfig");
const { getAlunoByID } = require("../../alunos/model/mdlAlunos");

const getAllClientes = async () => {
    return (
        await db.query(
            "SELECT *,(SELECT descricao from pedidos where pedidoid = cliente.pedidoid) FROM clientes WHERE deleted = false ORDER BY nome ASC"
        )
    ).rows;
};

const getClienteByID = async (clienteIDPar) => {
    return (
        await db.query(
            "SELECT *, (SELECT descricao from PEDIDOS where pedidoid = cliente.pedidoid) FROM clientes WHERE clienteid = $1 " +
            " and deleted = false ORDER BY nome ASC", [clienteIDPar]
        )
    ).rows;
};

const insertClientes = async (clienteREGPar) => {
    let linhasAfetadas;
    let msg = "ok";

    try {
        linhasAfetadas = (
            await db.query(
                "INSERT INTO clientes " + "values(default, $1, $2, $3, $4, $5",
                [
                    clienteREGPar.codigo,
                    clienteREGPar.nome,
                    clienteREGPar.endereco,
                    clienteREGPar.ativo,
                    clienteREGPar.deleted,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlClientes | insertClientes] " + error.detail;
        linhasAfetadas = -1;
    }
    return { msg, linhasAfetadas };
};

const updateClientes = async (clienteREGPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas(
            await db.query(
                "UPDATE clientes SET codigo = $2, nome = $3, endereco = $4, ativo = $5, deleted = $6 WHERE clienteid = $1",
                [
                    clienteREGPar.clienteid,
                    clienteREGPar.codigo,
                    clienteREGPar.nome,
                    clienteREGPar.endereco,
                    clienteREGPar.ativo,
                    clienteREGPar.deleted,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlClientes | updateClientes " + error.detail;
        linhasAfetadas = -1;
    }
    return { msg, linhasAfetadas };
};


const deleteClientes = async (clienteIDPar) => {
    let linhasAfetadas;
    let msg = "ok";

    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE clientes SET deleted = true WHERE clienteid = $1",
                [clienteIDPar.clienteid]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlClientes | deleteClientes]" + error.detail;
        linhasAfetadas = -1;
    }
    return { msg, linhasAfetadas };
};

module.exports = {
    getAllClientes,
    getClienteByID,
    insertClientes,
    updateClientes,
    deleteClientes,
};