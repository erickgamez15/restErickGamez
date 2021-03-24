const dbCon = require("../Configuracion/Config");

function statusAsistencia(req,res,next){
    dbCon.any('SELECT * FROM status_assistance')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Status asistencia ok"
        })
    })
}


module.exports = {
    statusAsistencia: statusAsistencia
}