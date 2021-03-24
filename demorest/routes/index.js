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
const asistencia= require("../modulos/StatusAsistencia/asistencia");
router.get('/v1/asistencia', asistencia.statusAsistencia)
module.exports = router;
