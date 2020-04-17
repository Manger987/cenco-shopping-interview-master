"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const auth_services_1 = require("./../services/auth.services");
app.post("/createAuth", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth = yield auth_services_1.AuthService.createAuthentication(req.body.email, req.body.password);
        yield res.json(auth);
    }
    catch (error) {
        yield res.json(error);
    }
}));
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_services_1.AuthService.loginEmailUser(req.body.email, req.body.password);
        yield res.json(user);
    }
    catch (error) {
        yield res.json(error);
    }
}));
app.get("/logOut", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const login = yield auth_services_1.AuthService.logOut();
    res.json(login);
}));
exports.default = app;
//# sourceMappingURL=auth.js.map