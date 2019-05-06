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
    HV.save()
        .then(HV => {
            res.redirect('/gracias')
            console.log(HV)
        })
        .catch(err => {
            res.send(err);
        })
});
module.exports = router;