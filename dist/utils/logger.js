"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
module.exports = winston_1.createLogger({
    transports: [
        new winston_1.transports.Console({
            level: 'debug',
            format: winston_1.format.combine(winston_1.format.simple())
        })
    ]
});
//# sourceMappingURL=logger.js.map