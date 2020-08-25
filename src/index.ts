import express from 'express';
import * as path from 'path';
import cookieParser from 'cookie-parser';
// const logger = require('morgan');
// const normalizePort = require('normalize-port');
import product from './routes/product';
import bodyParser from "body-parser";
import { normalizePort } from './utils/general';
import "@babel/polyfill";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// define a route handler for the default home page
app.get( "/", ( req: any, res: any ) => {
    res.send( "Hello world!" );
} );

app.use('/product',product);
// start the Express server

const port = normalizePort(process.env.PORT || '3000');
app.listen(port, () => {
// console.log(`Escuchando por el puerto ${port}!!!`)
});

module.exports = app;