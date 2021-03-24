const dbCon = require("../Configuracion/Config");

function listaUsuarios(req, res, next){
    dbCon.any('SELECT * FROM user_uc')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Lista de usuarios"
        })
    })
}


module.exports = {
    listaUsuarios:listaUsuarios
}