"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePort = void 0;
function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
exports.normalizePort = normalizePort;
//# sourceMappingURL=general.js.map