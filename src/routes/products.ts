import { resolve } from "dns";

const express = require('express');
const router  = express.Router();
const axios = require('axios');
const controlLog = require('./../utils/logger');

router.get("/", async (req: any, res: any) => {
        const skuList = '347851,MPM00005117226,MPM00007573574,MPM00005622268,MPM00001694889,380052';
        for (var i = Math.random(); i < 0.15; i = Math.random()){
            // Fallo Generar Log. 
            controlLog.info(`Tasa de error es menor al 15%. Tasa Actual es de :${i}`);
        }
            // PASAR DESARROLLO A UN UTILS U OTRA CAPA PARA SER RE LLAMADA SI EL % ES MAS BAJO.
            await axios.get(`https://simple.ripley.cl/api/v2/products?partNumbers=${skuList}`)
            .then(async (response: any) => {
                await res.send(response.data);
            })
            .catch(async (error: any) => {
                console.log(error);
                await res.send(error);
            });
        
        
});

module.exports = router;