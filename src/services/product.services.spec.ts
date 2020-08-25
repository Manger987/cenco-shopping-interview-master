import { ProductsServices } from './product.services';
const products = [
    { code: "BT", name: "blue t-shit", price: 100, discount: 20 },
    { code: "RT", name: "red t-shit", price: 100, discount: 0 },
    { code: "BJX", name: "blue jeans X", price: 100, discount: 5 },
    { code: "BJY", name: "blue jeans Y", price: 100, discount: 30 },
    { code: "BJZ", name: "blue jeans Z", price: 100, discount: 0 },
];

describe('getAllProduct', () => {
    it('should return a array with data', () => {
        const productsDataReturn = ProductsServices.getAllProduct()
        console.log(productsDataReturn);
        expect(products).toEqual(productsDataReturn)
    })
});

describe('getProductByCode', () => {
    it('should return a array with data of product by code', () => {
        const productDataReturn = ProductsServices.getProductByCode("BT")
        let come :object = {
            "code": "BT",
            "name": "blue t-shit",
            "price": 100,
            "discount": 20
          };
        expect(come).toEqual(productDataReturn)
    })
});

describe('getTotalProductsPrice', () => {
    it('should return a array with data about total products Proie', () => {
        const productsDataReturn = ProductsServices.getTotalProductsPrice()
        console.log(productsDataReturn);
        expect(500).toEqual(productsDataReturn)
    })
});
describe('getTotalProductsDiscount', () => {
    it('should return a array with data about Total Products with Discount', () => {
        const productsDataReturn = ProductsServices.getTotalProductsDiscount()
        console.log(productsDataReturn);
        expect(445).toEqual(productsDataReturn)
    })
});
describe('getTotalDiscount', () => {
    it('should return a array with data about Total Discounts', () => {
        const productsDataReturn = ProductsServices.getTotalDiscount()
        console.log(productsDataReturn);
        expect(55).toEqual(productsDataReturn)
    })
});