var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//aqui definimos el endpoint (la url para acceder al recurso listarInvitados)
const invitados= require("../modulos/invitados/guest");
router.get('/v1/guest', invitados.listaInvitados)

//aqui definimos el endpoint (la url para acceder al recurso statusAsistencia)
const statusasistencia= require("../modulos/StatusAsistencia/asistencia");
router.get('/v1/statusasistencia', statusasistencia.statusAsistencia)

//aqui definimos el endpoint (la url para acceder al recurso usuarios)
const usuarios= require("../modulos/usuarios/usuarios");
router.get("/v1/user", usuarios.listaUsuarios)

//aqui definimos el endpoint (la url para acceder al recurso evento)
const evento= require("../modulos/eventos/evento");
router.get("/v1/event", evento.listaEvento)

//aqui definimos el endpoint (la url para acceder al recurso evento)
const asistencia= require("../modulos/asistencia/asistencia");
router.get("/v1/asistencia", asistencia.listaAsistencia)

//aqui definimos el endpoint (la url para acceder al recurso evento)
const organizer= require("../modulos/organizer/organizer");
router.get("/v1/organizer", organizer.organizer)
module.exports = router;
