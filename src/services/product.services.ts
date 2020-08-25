import {evaluate} from "mathjs";
import { Product } from './../model/product';
const products : Product[] = [
    { code: "BT", name: "blue t-shit", price: 100, discount: 20 },
    { code: "RT", name: "red t-shit", price: 100, discount: 0 },
    { code: "BJX", name: "blue jeans X", price: 100, discount: 5 },
    { code: "BJY", name: "blue jeans Y", price: 100, discount: 30 },
    { code: "BJZ", name: "blue jeans Z", price: 100, discount: 0 },
];
export class ProductsServices {
  
  static getAllProduct = () => {
      return products;
  };

  static getProductByCode = async (code: string) => {
      return products.find((product: any) => product.code == code);
  };

  static getTotalProductsPrice = () => {
      let suma = 0;
      products.map((product: any) => suma = suma + parseInt(product.price));
      return suma;
  };

  static getTotalProductsDiscount = () => {
      let suma = 0;
      let averageSingleProduct = 0;
      products.map((product) => {
          averageSingleProduct = evaluate(`${product.price}-((${product.price}*${product.discount})/100)`);
          suma = suma + averageSingleProduct;
      });
      return suma;
  };
  static getTotalDiscount = () => {
    let suma = 0;
    products.map((product: any) => suma = suma + parseInt(product.discount));
    return suma;
  }
}