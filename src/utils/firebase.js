import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDy9pg72weSc1vABr3iTMxofb70QAOl6ew",
  authDomain: "mykrourl.firebaseapp.com",
  databaseURL: "https://mykrourl.firebaseio.com",
  projectId: "mykrourl",
  storageBucket: "mykrourl.appspot.com",
  messagingSenderId: "115852597524",
  appId: "1:115852597524:web:37609ef46942903f76ca01",
});

const functions = firebase.app().functions("asia-south1");
functions.useFunctionsEmulator("http://localhost:5000");
export const getLongUrl = functions.httpsCallable("getLongUrl");
export const getShortUrl = functions.httpsCallable("getShortUrl");
