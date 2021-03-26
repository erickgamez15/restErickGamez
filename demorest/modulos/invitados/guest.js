//aqui va el metodo para listar invitados
const dbCon = require("../Configuracion/Config");

function listaInvitados(req,res,next){
    dbCon.any('SELECT * FROM guest').then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Lista de invitados ok"
        })
    })
}

function registrarInvitado(req, res, next){
    const query= "INSERT INTO guest (name, last_name, created_by, updated_by)" 
    + "VALUES (${name}, ${last_name}, ${user_id},${user_id} )";
    console.log(req.body);
    dbCon.any(query, req.body).then(function (data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Invitado registrado con exito"
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

function eliminarInvitado(req,res, next){
    var guest_id= parseInt(req.params.id);
    dbCon.any("DELETE FROM guest WHERE guest_id= $1", guest_id).then(function(data){
        res.json({
            status:"ok",
            result:"sin información",
            mensaje:"Invitado eliminado con exito"
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

function editarInvitados(req, res, next){
    dbCon.none('UPDATE guest SET name=$1 WHERE guest_id=$2',
    [req.body.nombre, req.body.id])
    .then(function (){
        res.json({
            status:"ok",
            result:"sin información",
            mensaje:"Se edito correctamente"
        })
    })
    .catch(function (errorbd){
        console.log(errorbd);
        res.json({
            status:"error",
            result: "sin informaciòn",
            mensaje:errorbd
        })
    })
}

module.exports= {
    listaInvitados: listaInvitados,
    registrarInvitado:registrarInvitado,
    eliminarInvitado:eliminarInvitado,
    editarInvitados:editarInvitados
}