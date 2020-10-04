import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const  firebaseConfig = {
  apiKey: "AIzaSyCuJAcaSFaF0DfsgwoFU1LoX1hJybo6KR4",
  authDomain: "dailycius-app.firebaseapp.com",
  databaseURL: "https://dailycius-app.firebaseio.com",
  projectId: "dailycius-app",
  storageBucket: "dailycius-app.appspot.com",
  messagingSenderId: "260469422739",
  appId: "1:260469422739:web:209a99430fd5d2b2fcab66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//const facebookAuthProvider = new firebase.auth.Faceb

export {
  db, 
  googleAuthProvider,
  firebase
}