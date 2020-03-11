import express from 'express';
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const normalizePort = require('normalize-port');

const user = require('./routes/user');
const products = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// define a route handler for the default home page
app.get( "/", ( req: any, res: any ) => {
    res.send( "Hello world!" );
} );

app.use('/user',user);
app.use('/products',products);
// start the Express server
const port = normalizePort(process.env.PORT || '4600');
app.listen(port, () => console.log(`Escuchando por el puerto ${port}!!!`));

module.exports = app;