import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmCVPJojRL-Ft3pyf8uslsJTqvxQLwUIE",
    authDomain: "slack-sami.firebaseapp.com",
    databaseURL: "https://slack-sami.firebaseio.com",
    projectId: "slack-sami",
    storageBucket: "slack-sami.appspot.com",
    messagingSenderId: "848614109233",
    appId: "1:848614109233:web:44392e69cdce676a6ee510",
    measurementId: "G-BKZ71KM1M4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;