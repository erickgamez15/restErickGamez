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

function registrarAsistencia(req, res, next){
    const query= "INSERT INTO status_assistance (name, created_by, updated_by)" 
    + "VALUES (${name}, ${user_id},${user_id} )";
    console.log(req.body);
    dbCon.any(query, req.body).then(function (data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Asistencia registrada con éxito"
        })
    })
    .catch(function(errorbd){
        console.log(errorbd)
        res.json({
            status:"error",
            result:"sin informacion",
            mensaje:errorbd
        })
    })
}

function eliminarAsistencia(req,res, next){
    var user_id= parseInt(req.params.id);
    dbCon.any("DELETE FROM status_assistance WHERE user_id= $1", user_id).then(function(data){
        res.json({
            status:"ok",
            result:"sin información",
            mensaje:"Asistencia eliminada con éxito"
        })
    })
    .catch(function(errorbd){
        res.json({
            status:"error",
            result:"Sin informacion",
            mensaje:errorbd
        })
    })
}

module.exports = {
    statusAsistencia: statusAsistencia,
    registrarAsistencia:registrarAsistencia,
    eliminarAsistencia:eliminarAsistencia
}