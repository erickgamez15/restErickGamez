const dbCon = require("../Configuracion/Config");

function guestEvent(req, res, next){
    dbCon.any('SELECT * FROM guest_event')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"GuestEvent ok"
        })
    })
}


module.exports = {
    guestEvent:guestEvent
}