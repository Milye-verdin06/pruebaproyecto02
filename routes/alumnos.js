//Ruta api/alumnos
const { Router } = require('express')
const { conString } = require('../database/config');
const sql = require('mssql');

const router = Router();

router.get('/', (req, res) => {
    sql.on('error', err => {
        console.log(err);
        res.json(err);

    });
    sql.connect(conString).then(pool => {
        return pool.request()
            .execute('stp_alumnos_getall');
    }).then(result => {
        res.json(result.recordSet);

    }).catch(err => {
        res.json(err);
    });


});

module.exports = router;