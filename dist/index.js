"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import firebase from 'firebase-admin';
const firebase = __importStar(require("firebase/app"));
require("firebase/auth");
require("firebase/firestore");
const path = __importStar(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// const logger = require('morgan');
// const normalizePort = require('normalize-port');
const auth_1 = __importDefault(require("./routes/auth"));
const products_1 = __importDefault(require("./routes/products"));
const body_parser_1 = __importDefault(require("body-parser"));
const general_1 = require("./utils/general");
require("@babel/polyfill");
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
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use(logger('dev'));
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
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
app.use('/auth', auth_1.default);
app.use('/products', products_1.default);
// start the Express server
const port = general_1.normalizePort(process.env.PORT || '4600');
app.listen(port, () => {
    // console.log(`Escuchando por el puerto ${port}!!!`)
});
module.exports = app;
//# sourceMappingURL=index.js.map