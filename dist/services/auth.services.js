"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase/app");
class AuthService {
}
exports.AuthService = AuthService;
AuthService.createAuthentication = (email, password) => {
    try {
        console.log('createAuthentication:', email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            console.log('user registed:', user);
            return user;
        })
            .catch(function (error) {
            var errorCode = error.code;
            throw error;
        });
    }
    catch (error) {
        console.log('error:', error);
        return error;
    }
};
AuthService.loginEmailUser = (email, password) => {
    try {
        console.log('service - data:', email, password);
        firebase.auth().signInWithEmailAndPassword(String(email), String(password)).then((resp) => {
            console.log('responde Service', resp.user);
            return resp;
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            throw error;
        });
    }
    catch (error) {
        console.log('error:', error);
        return error;
    }
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