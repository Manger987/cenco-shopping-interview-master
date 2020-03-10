"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const app_1 = require("firebase/app");
let AuthService = class AuthService {
    constructor(afsAuth, router, afs) {
        this.afsAuth = afsAuth;
        this.router = router;
        this.afs = afs;
    }
    isAuth() {
        //Metodo Comprueba si el usuario esta logueado.
        return this.afsAuth.authState.pipe(operators_1.map(auth => auth));
    }
    registerUser(email, password) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(userData => {
                resolve(userData),
                    this.updateUserData(userData.user);
            }).catch(err => console.log('error Auth/registerUser : ', reject(err)));
        });
    }
    loginEmailUser(email, password) {
        return new Promise((resolve, reject) => {
            this.afsAuth.auth.signInWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    loginFacebookUser() {
        return this.afsAuth.auth.signInWithPopup(new app_1.auth.FacebookAuthProvider())
            .then((credential) => {
            this.updateUserData(credential.user);
        });
    }
    loginGoogleUser() {
        return this.afsAuth.auth.signInWithPopup(new app_1.auth.GoogleAuthProvider())
            .then((credential) => {
            this.updateUserData(credential.user);
        });
    }
    logOutUser() {
        this.afsAuth.auth.signOut();
    }
    updateUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            id: user.uid,
            email: user.email,
            roles: {
                type: 2
            }
        };
        return userRef.set(data, { merge: true });
    }
    isUserAdmin(userUid) {
        return this.afs.doc(`users/${userUid}`).valueChanges(); //devuelve documento correspondiente al userUid
    }
    rolUser(rolId) {
        switch (rolId) {
            case 1: {
                return 'admin';
                break;
            }
            case 2: {
                return 'Edit';
                break;
            }
            default: {
                return 'Writer';
                break;
            }
        }
    }
};
AuthService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map