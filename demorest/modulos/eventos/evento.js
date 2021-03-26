// Usan joins //
const dbCon = require("../Configuracion/Config");

function listaEvento(req, res, next){
    dbCon.any('SELECT * FROM event_uc')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Lista de eventos"
        })
    })
}

function registrarEvento(req, res, next){
    const query = "INSERT INTO event_uc (name, organizer_id, observations, duration_days, created_by, update_by)" 
    + "VALUES (${name}, ${organizer_id}, ${observations}, ${duration_days}, ${user_id},${user_id} )";
    console.log(req.body);
    dbCon.any(query, req.body).then(function (data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Evento registrado con éxito"
        })
    })
    .catch(function(errorbd){
        res.json({
            status:"error",
            result:"sin informacion",
            mensaje:errorbd
        })
    })
}

function eliminarEvento(req,res, next){
    var event_id= parseInt(req.params.id);
    dbCon.any("DELETE FROM event_uc WHERE event_uc_id= $1", event_id).then(function(data){
        res.json({
            status:"ok",
            result:"sin información",
            mensaje:"Evento eliminado con exito"
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
    listaEvento:listaEvento,
    registrarEvento:registrarEvento,
    eliminarEvento:eliminarEvento
}