import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


firebase.initializeApp({
    apiKey: "AIzaSyAHx-Jg4cNIHX-x2MDww_puia221XdCNHA",
    authDomain: "questionandanswer-5bd89.firebaseapp.com",
    projectId: "questionandanswer-5bd89",
    storageBucket: "questionandanswer-5bd89.appspot.com",
    messagingSenderId: "336608539281",
    appId: "1:336608539281:web:9952095c8b710be3e8c530",
    measurementId: "G-W7XSCEP48R"
});

export const auth = firebase.auth();