const dbCon = require("../Configuracion/Config");

function organizer(req, res, next){
    dbCon.any('SELECT * FROM organizer')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Organizer ok"
        })
    })
}


module.exports = {
    organizer:organizer
}