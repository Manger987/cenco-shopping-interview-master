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
const axios = require('axios');
const dataProducts = [];
class ProductsServices {
}
exports.ProductsServices = ProductsServices;
ProductsServices.getProducts = (skuList) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios.get(`https://simple.ripley.cl/api/v2/products?partNumbers=${skuList}`)
        .then((response) => {
        // console.log(response);
        response.data.forEach((element) => {
            dataProducts.push({
                id: element.uniqueID,
                name: element.name,
                partNumber: element.partNumber,
                fullImage: element.fullImage,
                images: element.images
            });
            element.images.forEach((image) => {
                console.log('Image::', image);
            });
        });
        return dataProducts;
    });
});
//# sourceMappingURL=products.services.js.map