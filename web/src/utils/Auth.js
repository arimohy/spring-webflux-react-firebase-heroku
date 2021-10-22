import firebase from 'firebase/app';
import "firebase/auth"
import {auth} from "./firebase"


export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (email, uid,photoURL,displayName) => ({ type: LOGIN, payload: {email, uid ,photoURL,displayName} })

export const logout = () => ({
    type: LOGOUT
});


export function signup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
}

export function logoutcerrarsesion() {
    return auth().signOut();
}
