const {Router} = require('express');
const { getSucursales, postSucursal, putSucursal, deleteSucursal, asignarEmpresa } = require('../controllers/sucursal');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/view',[
    validarJWT
], getSucursales);

router.post('/add', [
    validarJWT
], postSucursal);

router.put('/edit/:id', [
    validarJWT
], putSucursal);

router.delete('/delete/:id', [
    validarJWT
], deleteSucursal);

router.get('/assign/:idSucursal', [
    validarJWT
], asignarEmpresa);

module.exports = router;