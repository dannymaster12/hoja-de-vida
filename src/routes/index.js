const express = require('express');
const router = express.Router();

const hojavida = require('../models/hoja-vida');

router.get('/dejanos-tus-datos', (req, res) => {
    res.render('inicio');
});

router.get('/', (req, res) => {
    res.redirect('/dejanos-tus-datos');
})
router.get('/gracias', (req, res) => {
    res.render('gracias');
})

router.post('/guardar', (req, res) => {
    const HV = new hojavida(req.body);
    if (HV.save()) {
        res.redirect('/gracias');
    } else {
        console.log('error')
    }
})
module.exports = router;