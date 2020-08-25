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
exports.ProductsServices = void 0;
const mathjs_1 = require("mathjs");
const products = [
    { code: "BT", name: "blue t-shit", price: 100, discount: 20 },
    { code: "RT", name: "red t-shit", price: 100, discount: 0 },
    { code: "BJX", name: "blue jeans X", price: 100, discount: 5 },
    { code: "BJY", name: "blue jeans Y", price: 100, discount: 30 },
    { code: "BJZ", name: "blue jeans Z", price: 100, discount: 0 },
];
class ProductsServices {
}
exports.ProductsServices = ProductsServices;
ProductsServices.getAllProduct = () => {
    return products;
};
ProductsServices.getProductByCode = (code) => __awaiter(void 0, void 0, void 0, function* () {
    return products.find((product) => product.code == code);
});
ProductsServices.getTotalProductsPrice = () => {
    let suma = 0;
    products.map((product) => suma = suma + parseInt(product.price));
    return suma;
};
ProductsServices.getTotalProductsDiscount = () => {
    let suma = 0;
    let averageSingleProduct = 0;
    products.map((product) => {
        averageSingleProduct = mathjs_1.evaluate(`${product.price}-((${product.price}*${product.discount})/100)`);
        suma = suma + averageSingleProduct;
    });
    return suma;
};
ProductsServices.getTotalDiscount = () => {
    let suma = 0;
    products.map((product) => suma = suma + parseInt(product.discount));
    return suma;
};
//# sourceMappingURL=product.services.js.map