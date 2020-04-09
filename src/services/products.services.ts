const axios = require('axios');
import { Product } from './../model/product';
const dataProducts: Product[] = [];

export class ProductsServices {
    static getProducts = async (skuList: string) => {
        return await axios.get(`https://simple.ripley.cl/api/v2/products?partNumbers=${skuList}`)
        .then((response: any) => {
            // console.log('SERVICE: ', response.data);
            response.data.forEach((element: any) => {
                // console.log('FOREACH:::',element);  
                dataProducts.push({
                    id: element.uniqueID,
                    name: element.name,
                    partNumber: element.partNumber,
                    fullImage: element.fullImage
                });
            })
        return dataProducts;    
        })
    }
} 