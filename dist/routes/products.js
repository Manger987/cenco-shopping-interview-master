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
const redis_1 = require("./../utils/redis");
const express = require('express');
const router = express.Router();
const axios = require('axios');
const controlLog = require('./../utils/logger');
const products_services_1 = require("./../services/products.services");
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skuList = '347851,MPM00005117226,MPM00007573574,MPM00005622268,MPM00001694889,380052';
        for (var i = Math.random(); i < 0.15; i = Math.random()) {
            // Fallo Genera Log. 
            controlLog.info(`Tasa de error es menor al 15%. Tasa Actual es de :${i}`);
        }
        // GET PRODUCTS
        res.json(yield getProducts(skuList));
    }
    catch (error) {
        console.log('Error: in products Router', error);
        res.json(error);
    }
}));
function getProducts(skuList) {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield redis_1.getDataRedis('products');
        if (products) {
            console.log('data from redis:', products);
            return JSON.parse(products);
        }
        else {
            const products = yield products_services_1.ProductsServices.getProducts(skuList)
                .then((response) => __awaiter(this, void 0, void 0, function* () {
                if (response.data) {
                    return response.data;
                }
                else {
                    throw 'Error: There are not data of products';
                }
            }))
                .catch((error) => {
                console.log(error);
                throw 'Error: There are not data of products';
            });
            if (products) {
                if (yield redis_1.setDataRedis('products', JSON.stringify(products))) {
                    return products;
                }
                else {
                    // MAKE LABELS FILE TO CONTROL OF ERRORS
                    throw 'Error seting data in Redis';
                }
            }
        }
    });
}
module.exports = router;
//# sourceMappingURL=products.js.map