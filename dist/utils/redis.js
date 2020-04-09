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
const asyncRedis = require("async-redis"); //const redis = require('redis');
// Redis Configurate
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = asyncRedis.createClient(REDIS_PORT);
// export class RedisUtils {
function setDataRedis(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client.set(key, value);
    });
}
exports.setDataRedis = setDataRedis;
;
// export function setDataRedis(index: string, data: any) {
//     return client.setex(index, 1000, data
//         ,async function(err: any, res: any) {
//         console.log('aqui2', res);
//         return await res ? true : false;
//     });
//     // console.log('aqui2 1/2');
//     // return setingRedis;
// }
function getDataRedis(key) {
    return __awaiter(this, void 0, void 0, function* () {
        let val = yield client.get(key);
        return val;
    });
}
exports.getDataRedis = getDataRedis;
;
// export function getDataRedis(index: string) {
//     return client.get(index, async (err: any, data: any) => {
//         if (err) throw err;
//         console.log('getData:', data);
//         return await (data !== null) ? data : false;
//     });
// }
// }
//# sourceMappingURL=redis.js.map