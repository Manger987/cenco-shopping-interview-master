"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlLog = void 0;
const winston_1 = require("winston");
function controlLog() {
    return winston_1.createLogger({
        format: winston_1.format.combine(winston_1.format.simple(), winston_1.format.timestamp(), winston_1.format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)),
        transports: [
            new winston_1.transports.File({
                maxsize: 5120000,
                maxFiles: 50,
                filename: `${__dirname}/../logs/log-RipBack.log`
            }),
            new winston_1.transports.Console({
                level: 'debug'
            })
        ]
    });
}
exports.controlLog = controlLog;
//# sourceMappingURL=logger.js.map