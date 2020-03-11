import { resolve } from "dns";

const express = require('express');
const router  = express.Router();
const axios = require('axios');

router.get("/", async (req: any, res: any) => {
        const skuList = '347851,MPM00005117226,MPM00007573574,MPM00005622268,MPM00001694889,380052';
        const randomNumber = Math.random();
        console.log('numero',randomNumber);
        if (randomNumber < 0.15){}
        //PASAR DESARROLLO A UN UTILS U OTRA CAPA PARA SER RE LLAMADA SI EL % ES MAS BAJO.
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