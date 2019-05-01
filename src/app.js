const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');

const app = express();

//localhost://hola
//coneccion a la base de datos
mongoose.connect('mongodb+srv://daniel:danielito123@cluster0-c1iwu.mongodb.net/test?retryWrites=true')
    .then(db=> console.log('base de datos conectada'))
    .catch(err => console.log('err' + ' ' + err));

//importar rutas
const Routes = require('./routes/index');



//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares o ejecutables del servidor
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use('/', Routes);



//inicio de servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});

