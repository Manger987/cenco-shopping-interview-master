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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const auth_services_1 = require("./../services/auth.services");
router.post("/createAuth", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("createAuth:::req:", req.body);
        const auth = yield auth_services_1.AuthService.createAuthentication(req.body.email, req.body.password);
        res.json(auth);
    }
    catch (error) {
        console.log('Error catch', error);
        res.json(error);
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_services_1.AuthService.loginEmailUser(req.body.email, req.body.password);
        yield res.json(user);
    }
    catch (error) {
        console.log('error Auth:', error);
        yield res.json(error);
    }
}));
router.get("/logOut", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const login = yield auth_services_1.AuthService.logOut();
    console.log("logOut: ", login);
    res.json(login);
}));
module.exports = router;
//# sourceMappingURL=auth.js.map