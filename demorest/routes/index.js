var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//aqui definimos el endpoint (la url para acceder al recurso listarInvitados)
const invitados = require("../modulos/invitados/guest");
router.get('/v1/guest', invitados.listaInvitados); //Consulta a la tabla de invitados
router.post('/v1/guest', invitados.registrarInvitado); // Insercion de datos a la tabla
router.delete("/v1/guest/:id", invitados.eliminarInvitado); // Elimina un invitado

//aqui definimos el endpoint (la url para acceder al recurso statusAsistencia)
const statusasistencia = require("../modulos/StatusAsistencia/asistencia");
router.get('/v1/statusasistencia', statusasistencia.statusAsistencia); //Consulta a la tabla status asistencia
router.post("/v1/statusasistencia", statusasistencia.registrarAsistencia); // Insercion de datos a la tabla
router.delete("/v1/statusasistencia/:id", statusasistencia.eliminarAsistencia); // Elimina una asistencia

//aqui definimos el endpoint (la url para acceder al recurso usuarios)
const usuarios = require("../modulos/usuarios/usuarios");
router.get("/v1/user", usuarios.listaUsuarios); // Consulta a la tabla usuarios
router.post("/v1/user", usuarios.registrarUsuario); // Insercion de datos a la tabla
router.delete("/v1/user/:id", usuarios.eliminarUsuario); // Elimina un usuario

//aqui definimos el endpoint (la url para acceder al recurso eventDay)
const organizer = require("../modulos/organizer/organizer");
router.get("/v1/organizer", organizer.organizer); //Consulta a la tabla organizer
router.post("/v1/organizer", organizer.registrarOrganizer); // Insercion de datos a la tabla
router.delete("/v1/organizer/:id", organizer.eliminarOrganizer); // Elimina un organizador
router.put('/v1/organizer/', organizer.editarOrganizer); // Edita un campo de organizer

//aqui definimos el endpoint (la url para acceder al recurso evento)
const evento = require("../modulos/eventos/evento");
router.get("/v1/event", evento.listaEvento); // Consulta a la tabla evento
router.post("/v1/event", evento.registrarEvento); // Insercion de datos a la tabla
router.delete("/v1/event/:id", evento.eliminarEvento); // Elimina un evento

//aqui definimos el endpoint (la url para acceder al recurso evento)
const asistencia = require("../modulos/asistencia/asistencia");
router.get("/v1/asistencia", asistencia.listaAsistencia)

//aqui definimos el endpoint (la url para acceder al recurso guestEvent)
const day = require("../modulos/eventDay/eventDay");
router.get("/v1/eventDay", day.eventDay)

const guest = require("../modulos/guestEvent/guestEvent");
router.get("/v1/guestEvent", guest.guestEvent)
module.exports = router;
