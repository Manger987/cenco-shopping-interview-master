import express from 'express';
import * as redis from 'redis';
// Redis Configurate
const client = redis.createClient(6379);
const app = express();
import { controlLog } from './../utils/logger';
import { ProductsServices } from './../services/products.services';
import labels from './../labels.json';

app.get("/", async (req: any, res: any) => {
    try {
        const skuList = '347851,MPM00005117226,MPM00007573574,MPM00005622268,MPM00001694889,380052,2000378676935P,2000376896175P,2000378291312P';
        for (var i = Math.random(); i < 0.15; i = Math.random()){
            // Fallo Genera Log. 
            await controlLog().info(`Tasa de error es menor al 15%. Tasa Actual es de :${i}`);
        }    

        client.get('products', async (error, products) => {
            if (!error && products) {
                res.json(JSON.parse(products));
            } else {
                // GET PRODUCTS
                res.json(await getProducts(skuList));
            } 
        })
        
    } catch (error) {
        res.json(error);
    }
});

async function getProducts(skuList: string) {

    const products = await ProductsServices.getProducts(skuList);
    if (products){
        if (client.set('products', JSON.stringify(products), 'EX', 120)) {
            return products;
        } else {
            throw labels.Error.redis_set;
        }
    }
}

export default app;