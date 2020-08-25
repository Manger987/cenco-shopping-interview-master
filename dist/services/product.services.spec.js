"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_services_1 = require("./product.services");
const products = [
    { code: "BT", name: "blue t-shit", price: 100, discount: 20 },
    { code: "RT", name: "red t-shit", price: 100, discount: 0 },
    { code: "BJX", name: "blue jeans X", price: 100, discount: 5 },
    { code: "BJY", name: "blue jeans Y", price: 100, discount: 30 },
    { code: "BJZ", name: "blue jeans Z", price: 100, discount: 0 },
];
describe('getAllProduct', () => {
    it('should return a array with data', () => {
        const productsDataReturn = product_services_1.ProductsServices.getAllProduct();
        console.log(productsDataReturn);
        expect(products).toEqual(productsDataReturn);
    });
});
describe('getProductByCode', () => {
    it('should return a array with data of product by code', () => {
        const productDataReturn = product_services_1.ProductsServices.getProductByCode("BT");
        let come = {
            "code": "BT",
            "name": "blue t-shit",
            "price": 100,
            "discount": 20
        };
        expect(come).toEqual(productDataReturn);
    });
});
describe('getTotalProductsPrice', () => {
    it('should return a array with data about total products Proie', () => {
        const productsDataReturn = product_services_1.ProductsServices.getTotalProductsPrice();
        console.log(productsDataReturn);
        expect(500).toEqual(productsDataReturn);
    });
});
describe('getTotalProductsDiscount', () => {
    it('should return a array with data about Total Products with Discount', () => {
        const productsDataReturn = product_services_1.ProductsServices.getTotalProductsDiscount();
        console.log(productsDataReturn);
        expect(445).toEqual(productsDataReturn);
    });
});
describe('getTotalDiscount', () => {
    it('should return a array with data about Total Discounts', () => {
        const productsDataReturn = product_services_1.ProductsServices.getTotalDiscount();
        console.log(productsDataReturn);
        expect(55).toEqual(productsDataReturn);
    });
});
//# sourceMappingURL=product.services.spec.js.map