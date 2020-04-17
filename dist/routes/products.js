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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis = __importStar(require("redis"));
// Redis Configurate
const client = redis.createClient(6379);
const app = express_1.default();
const logger_1 = require("./../utils/logger");
const products_services_1 = require("./../services/products.services");
const labels_json_1 = __importDefault(require("./../labels.json"));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skuList = '347851,MPM00005117226,MPM00007573574,MPM00005622268,MPM00001694889,380052,2000378676935P,2000376896175P,2000378291312P';
        for (var i = Math.random(); i < 0.15; i = Math.random()) {
            // Fallo Genera Log. 
            yield logger_1.controlLog().info(`Tasa de error es menor al 15%. Tasa Actual es de :${i}`);
        }
        client.get('products', (error, products) => __awaiter(void 0, void 0, void 0, function* () {
            if (!error && products) {
                res.json(JSON.parse(products));
            }
            else {
                // GET PRODUCTS
                res.json(yield getProducts(skuList));
            }
        }));
    }
    catch (error) {
        res.json(error);
    }
}));
function getProducts(skuList) {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield products_services_1.ProductsServices.getProducts(skuList);
        if (products) {
            if (client.set('products', JSON.stringify(products), 'EX', 120)) {
                return products;
            }
            else {
                throw labels_json_1.default.Error.redis_set;
            }
        }
    });
}
exports.default = app;
//# sourceMappingURL=products.js.map