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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const product_services_1 = require("../services/product.services");
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_services_1.ProductsServices.getAllProduct();
    if (!products)
        res.status(404).send("Products not found");
    res.json(products);
}));
app.get("/checkout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Need to calculate total and discount
    const result = {
        total: yield product_services_1.ProductsServices.getAllProduct().length,
        totalDiscount: yield product_services_1.ProductsServices.getTotalDiscount(),
        totalToPay: yield product_services_1.ProductsServices.getTotalProductsDiscount(),
        product: yield product_services_1.ProductsServices.getAllProduct(),
    };
    res.json(result);
}));
app.get("/total", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const totalSuma = yield product_services_1.ProductsServices.getTotalProductsPrice();
    if (!totalSuma)
        res.status(404).send("Product not sum");
    res.json(totalSuma);
}));
app.get("/:code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_services_1.ProductsServices.getProductByCode(req.params.code);
    if (!product)
        res.status(404).send("Product not found");
    res.json(product);
}));
exports.default = app;
//# sourceMappingURL=product.js.map