const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');

const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares o ejecutables del servidor
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));




//inicio de servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});

