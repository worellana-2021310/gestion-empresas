const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const Empresa = require('../models/empresa');

const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header('x-token');
    if ( !token ) {
        return res.status(401).json({
            msg: '----- Token no encontrado -----'
        });
    }

    try {

        const { uid } = jwt.verify( token, process.env.SECRET_OR_PRIVATE_KEY );
        const empresa = await Empresa.findById( uid );
        if ( !empresa ) {
            return res.status(401).json({
                msg: '----- Token no valido -----'
            });
        }

        req.empresa = empresa;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: '----- Token no valido -----'
        })
    }
}

module.exports = {
    validarJWT
}