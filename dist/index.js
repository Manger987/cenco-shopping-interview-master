"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const normalizePort = require('normalize-port');
const serviceAccount = require('./../firebase-service-account.json');
const user = require('./routes/user');
const products = require('./routes/products');
require('dotenv').config();
exports.default = firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
});
const app = express_1.default();
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.use('/user', user);
app.use('/products', products);
// start the Express server
const port = normalizePort(process.env.PORT || '4600');
app.listen(port, () => console.log(`Escuchando por el puerto ${port}!!!`));
module.exports = app;
//# sourceMappingURL=index.js.map