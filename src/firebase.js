import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyAfHPas9GhTC13PP9V8x_xCBeg5amDUlR0",
   authDomain: "e-clone-project-89142.firebaseapp.com",
   projectId: "e-clone-project-89142",
   storageBucket: "e-clone-project-89142.appspot.com",
   messagingSenderId: "296515454909",
   appId: "1:296515454909:web:55dd66a89113d37136b4d4",
   measurementId: "G-CTG2VLKY10"
});

const db = firebase.firestore();

export { db }