const firebase = require("firebase/app");
// import "firebase/auth";
// import "firebase/firestore";
import axios from 'axios';
import { DataReturn } from './../model/dataReturn';
import labels from './../labels.json';

export class AuthService {

  static createAuthentication = (email: string, password: string) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password).then((user: any) => {
        console.log('user registed:', user);
        const data : DataReturn = {
          code: 200,
          message: 'success',
          data: user
        }
        return data;
      })
      .catch(function(error: any) {
        const data : DataReturn = {
          code: 409,
          message: labels.Error[409],
          data: error
        }
        console.log('auth service Error', data)
        throw data;
      });
  }

  static loginEmailUser = (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(String(email), String(password)).then((resp: any) => {
        const data : DataReturn = {
          code: 200,
          message: 'success',
          data: resp
        }
        return data;
    }).catch(function(error: any) {
      const data : DataReturn = {
          code: 401,
          message: error.message,
          data: error
      }
        throw data;
    });
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
