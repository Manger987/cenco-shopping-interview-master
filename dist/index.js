"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import firebase from 'firebase-admin';
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const normalizePort = require('normalize-port');
const serviceAccount = require('./../firebase-service-account.json');
const auth = require('./routes/auth');
const products = require('./routes/products');
const controlLog = require('./utils/logger');
const bodyParser = require('body-parser');
require('dotenv').config();
const firebaseConfig = {
    apiKey: "AIzaSyBLR8y6LmljgrvLjVAx9b9IdHxG-Vz26xk",
    authDomain: "rip-project-be8db.firebaseapp.com",
    databaseURL: "https://rip-project-be8db.firebaseio.com",
    projectId: "rip-project-be8db",
    storageBucket: "rip-project-be8db.appspot.com",
    messagingSenderId: "749151973820",
    appId: "1:749151973820:web:bc24de950ba180bfb37bb9",
    measurementId: "G-E63NK8GZQD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export default firebase.initializeApp({
//   credential: firebase.credential.cert(serviceAccount),
//   databaseURL: process.env.FIREBASE_DATABASE_URL
// })
const app = express_1.default();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: false }));
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
app.use('/auth', auth);
app.use('/products', products);
// start the Express server
const port = normalizePort(process.env.PORT || '4600');
app.listen(port, () => console.log(`Escuchando por el puerto ${port}!!!`));
module.exports = app;
//# sourceMappingURL=index.js.map