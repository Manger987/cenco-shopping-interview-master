import axios from 'axios';
import { Product } from './../model/product';
const dataProducts: Product[] = [];

export class ProductsServices {
    static getProducts = async (skuList: string) => {
        return await axios.get(`https://simple.ripley.cl/api/v2/products?partNumbers=${skuList}`)
        .then((response: any) => {
            response.data.forEach((element: any) => {
                dataProducts.push({
                    id: element.uniqueID,
                    name: element.name,
                    partNumber: element.partNumber,
                    fullImage: element.fullImage,
                    images: element.images
                });
                // element.images.forEach((image: string) => {
                //     console.log('Image::' ,image);
                // });
            })
        return dataProducts;    
        })
    }
} 