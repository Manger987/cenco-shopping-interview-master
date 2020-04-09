const firebase = require("firebase/app");
// import "firebase/auth";
// import "firebase/firestore";
import axios from 'axios';

export class AuthService {

  static createAuthentication = (email: string, password: string) => {
    try {
      console.log('createAuthentication:', email, password);
      firebase.auth().createUserWithEmailAndPassword(email, password).then((user: any) => {
        console.log('user registed:', user);
        return user;
      })
      .catch(function(error: any) {
        var errorCode = error.code;
        throw error;
      });
    } catch (error) {
      console.log('error:',error);
      return error;
    }
  }

  static loginEmailUser = (email: string, password: string) => {
    try {
        console.log('service - data:', email, password);
        firebase.auth().signInWithEmailAndPassword(String(email), String(password)).then((resp: any) => {
            console.log('responde Service', resp.user);
            return resp;
        }).catch(function(error: any) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            throw error;
        });
    } catch (error) {
        console.log('error:',error);
        return error;
    }
  }
  
  static logOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('logout true');
      return {logout: true}
    }).catch(function(error: any) {
      return {logout: false, error: error};
    });
  }
}
