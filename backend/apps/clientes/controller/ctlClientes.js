const mdlClientes = require("../model/mdlClientes")

/*
    'req' guarda tudo que vem do cliente pro servidor
    'res' guarda tudo que vem do servidor pro cliente
*/

const getAllClientes = (req, res) =>
    (async () => {
        let registro = await mdlClientes.getAllClientes();
        res.json({ status: "ok", registro: registro });
    })();


const getClienteByID = (req, res) =>
(async () => {

    const clienteID = parseInt(req.body.clienteid);
    let registro = await mdlClientes.getClienteByID(clienteID);

    res.json({ status: "ok", "registro": registro });
})();


const insertClientes = (req, res) =>
    (async () => {
        const clienteREG = req.body;
        let { msg, linhasAfetadas } = await mdlClientes.insertClientes(clienteREG);
        res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
    })();

const updateClientes = (req, res) =>
    (async () => {
        const clienteREG = req.body.clienteid;
        let { msg, linhasAfetadas } = await mdlClientes.updateClientes(clienteREG);
        res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
    })();

const deleteClientes = (req, res) =>
    (async () => {
        const clienteREG = req.body;
        let { msg, linhasAfetadas } = await mdlClientes.deleteClientes(clienteREG);
        res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
    })();

module.exports = {
    getAllClientes,
    getClienteByID,
    insertClientes,
    updateClientes,
    deleteClientes
};