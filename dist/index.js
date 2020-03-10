"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const normalizePort = require('normalize-port');
const user = require('./routes/user');
const app = express_1.default();
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_1.default.static(path.join(__dirname, 'public')));
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.use('/user', user);
// start the Express server
const port = normalizePort(process.env.PORT || '4600');
app.listen(port, () => console.log('Escuchando por el puerto 3000!!!'));
module.exports = app;
//# sourceMappingURL=index.js.map