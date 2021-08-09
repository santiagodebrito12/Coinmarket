import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-auth'

const firebaseConfig ={
    apiKey: "AIzaSyCrLYWS2Xs6KpKICn60wrljaR9ky0RPmX0",
    authDomain: "coinmarket-c1232.firebaseapp.com",
    projectId: "coinmarket-c1232",
    storageBucket: "coinmarket-c1232.appspot.com",
    messagingSenderId: "519149019550",
    appId: "1:519149019550:web:968ef942973c492f4eb68f"
}
firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase,
  }
  
