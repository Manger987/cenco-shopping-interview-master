"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("firebase/app"));
const labels_json_1 = __importDefault(require("./../labels.json"));
class AuthService {
}
exports.AuthService = AuthService;
AuthService.createAuthentication = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        const data = {
            code: 200,
            message: 'success',
            data: user
        };
        return data;
    })
        .catch((error) => {
        const data = {
            code: 409,
            message: labels_json_1.default.Error[409],
            data: error
        };
        throw data;
    });
};
AuthService.loginEmailUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(String(email), String(password)).then((resp) => {
        const data = {
            code: 200,
            message: 'success',
            data: resp
        };
        return data;
    }).catch((error) => {
        const data = {
            code: 401,
            message: error.message,
            data: error
        };
        throw data;
    });
};
AuthService.logOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        return { logout: true };
    }).catch((error) => {
        return { logout: false, error: error };
    });
};
//# sourceMappingURL=auth.services.js.map