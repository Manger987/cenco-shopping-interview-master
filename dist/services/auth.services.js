"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase/app");
const labels_json_1 = __importDefault(require("./../labels.json"));
class AuthService {
}
exports.AuthService = AuthService;
AuthService.createAuthentication = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        console.log('user registed:', user);
        const data = {
            code: 200,
            message: 'success',
            data: user
        };
        return data;
    })
        .catch(function (error) {
        const data = {
            code: 409,
            message: labels_json_1.default.Error[409],
            data: error
        };
        console.log('auth service Error', data);
        return data;
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
    }).catch(function (error) {
        const data = {
            code: 401,
            message: error.message,
            data: error
        };
        throw data;
    });
};
AuthService.logOut = () => {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log('logout true');
        return { logout: true };
    }).catch(function (error) {
        return { logout: false, error: error };
    });
};
//# sourceMappingURL=auth.services.js.map