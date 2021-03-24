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


module.exports = {
    listaEvento:listaEvento
}