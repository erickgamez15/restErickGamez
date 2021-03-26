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

function registrarUsuario(req, res, next){
    const query= "INSERT INTO user_uc (user_name, password, created_by, updated_by)" 
    + "VALUES (${name}, ${password}, ${user_id},${user_id} )";
    console.log(req.body);
    dbCon.any(query, req.body).then(function (data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Usuario registrado con exito"
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

function eliminarUsuario(req,res, next){
    var user_id= parseInt(req.params.id);
    dbCon.any("DELETE FROM user_uc WHERE user_id= $1", user_id).then(function(data){
        res.json({
            status:"ok",
            result:"sin información",
            mensaje:"Usuario eliminado con exito"
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
    listaUsuarios:listaUsuarios,
    registrarUsuario:registrarUsuario,
    eliminarUsuario:eliminarUsuario

}