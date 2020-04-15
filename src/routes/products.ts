import { resolve } from "dns";
import { setDataRedis, getDataRedis } from './../utils/redis';
const express = require('express');
const router  = express.Router();
const axios = require('axios');
const controlLog = require('./../utils/logger');

import { ProductsServices } from './../services/products.services';

router.get("/", async (req: any, res: any) => {
    try {
        const skuList = '347851,MPM00005117226,MPM00007573574,MPM00005622268,MPM00001694889,380052,2000378676935P';
        for (var i = Math.random(); i < 0.15; i = Math.random()){
            // Fallo Genera Log. 
            controlLog.info(`Tasa de error es menor al 15%. Tasa Actual es de :${i}`);
        }    
        // GET PRODUCTS
        res.json(await getProducts(skuList));
    } catch (error) {
        console.log('Error: in products Router', error);
        res.json(error);
    }
});

async function getProducts(skuList: string) {
    const products = await getDataRedis('products');
    if (products) {
        // console.log('data from redis:', JSON.parse(products));
        return JSON.parse(products);
    } else {
        const products = await ProductsServices.getProducts(skuList);
        if (products){
            if (await setDataRedis('products', JSON.stringify(products))) {
                return products;
            } else {
                // MAKE LABELS FILE TO CONTROL OF ERRORS
                throw 'Error seting data in Redis';
            }
        }
    }
}

module.exports = router;