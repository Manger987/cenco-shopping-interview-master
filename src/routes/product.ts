import express from 'express';
const app = express();
import { controlLog } from '../utils/logger';
import { ProductsServices } from '../services/product.services';
import labels from '../labels.json';

app.get("/", async (req, res) => {
    const products = await ProductsServices.getAllProduct();
    if(!products) res.status(404).send("Products not found");
    res.json(products);
  });

  app.get("/checkout",async (req, res) => {
  //Need to calculate total and discount
    const result = {
      total: await ProductsServices.getAllProduct().length,
      totalDiscount: await ProductsServices.getTotalDiscount(),
      totalToPay: await ProductsServices.getTotalProductsDiscount(),
      product: await ProductsServices.getAllProduct(),
    };
    res.json(result);
  });
  
  app.get("/total", async (req, res) => {
    const totalSuma = await ProductsServices.getTotalProductsPrice();
    if (!totalSuma) res.status(404).send("Product not sum");
    res.json(totalSuma);
  });
  
  app.get("/:code", async (req, res) => {
    const product = await ProductsServices.getProductByCode(req.params.code);
    if (!product) res.status(404).send("Product not found");
    res.json(product);
  });
  
export default app;