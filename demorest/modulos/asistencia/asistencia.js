const dbCon = require("../Configuracion/Config");

function listaAsistencia(req, res, next){
    dbCon.any('SELECT * FROM assistance')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Lista de asistencia"
        })
    })
}


module.exports = {
    listaAsistencia:listaAsistencia
}