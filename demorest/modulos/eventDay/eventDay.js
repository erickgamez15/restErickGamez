const dbCon = require("../Configuracion/Config");

function eventDay(req, res, next){
    dbCon.any('SELECT * FROM event_day')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"EventDay ok"
        })
    })
}


module.exports = {
    eventDay:eventDay
}