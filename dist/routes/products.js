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
const axios = require('axios');
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const skuList = '347851,MPM00005117226,MPM00007573574,MPM00005622268,MPM00001694889,380052';
    const randomNumber = Math.random();
    console.log('numero', randomNumber);
    if (randomNumber < 0.15) { }
    yield axios.get(`https://simple.ripley.cl/api/v2/products?partNumbers=${skuList}`)
        .then((response) => __awaiter(void 0, void 0, void 0, function* () {
        yield res.send(response.data);
    }))
        .catch((error) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(error);
        yield res.send(error);
    }));
}));
module.exports = router;
//# sourceMappingURL=products.js.map