const express = require("express");
const routerApp = express.Router();

const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appLogin = require("../apps/login/controller/ctlLogin");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appClientes = require("../apps/clientes/controller/ctlClientes");
const appPedidos = require("../apps/pedido/controller/ctlPedidos");

// middleware that is specific to this router
routerApp.use((req, res, next) => {
    next();
});

routerApp.get("/", (req, res) => {
    res.send("Olá mundo!");
});

//Rotas de Alunos
routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);
routerApp.post("/getAlunoByID", appLogin.AutenticaJWT, appAlunos.getAlunoByID);
routerApp.post("/insertAlunos", appLogin.AutenticaJWT, appAlunos.insertAlunos)
routerApp.post("/updateAlunos", appAlunos.updateAlunos);
routerApp.post("/DeleteAlunos", appAlunos.DeleteAlunos);

//Rotas de Cursos
routerApp.get("/GetAllCursos", appCursos.GetAllCursos);
routerApp.post("/GetCursoByID", appCursos.GetCursoByID);
routerApp.post("/InsertCursos", appCursos.InsertCursos);
routerApp.post("/UpdateCursos", appCursos.UpdateCursos);
routerApp.post("/DeleteCursos", appCursos.DeleteCursos);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

// Rota de Clientes
routerApp.get("/getAllClientes", appClientes.getAllClientes);
routerApp.post("/getClienteByID", appClientes.getClienteByID);
routerApp.post("/insertClientes",  appClientes.insertClientes);
routerApp.post('/updateClientes', appClientes.updateClientes);
routerApp.post("/deleteCliente", appClientes.deleteClientes);

// appLogin.AutenticaJWT,

//Rota de Pedidos
routerApp.get("/getAllPedidos", appPedidos.getAllPedidos);
routerApp.post("/getPedidosByID", appPedidos.getPedidoByID);
routerApp.post("/insertPedidos", appPedidos.insertPedidos)
routerApp.post("/updatePedidos", appPedidos.updatePedidos);
routerApp.post("/deletePedidos", appPedidos.deletePedidos);

module.exports = routerApp;
