const Empresa = require("../models/empresa");

const emailExiste = async( correo = '' ) => {
    const existeEmailDeEmpresa = await Empresa.findOne( { correo } );
    if ( existeEmailDeEmpresa) {
        throw new Error(`El correo ${ correo } ya esta registrado.`);
    }
}

const esRoleValido = async( rol = '') => {
    const existeRolDB = await Role.findOne( { rol } );
    if ( !existeRolDB ) {
        throw new Error(`El rol ${ rol } no existe.`);
    }
}

const existeEmpresaPorId = async(id) => {
    const existIdOfCompany = await Empresa.findById( id );
    if ( !existIdOfCompany) {
        throw new Error(`El id: ${id} no existe.`);
    }
}

module.exports = {
    emailExiste,
    esRoleValido,
    existeEmpresaPorId
}