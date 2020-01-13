import * as  firebase from "firebase";
  var firebaseConfig = {
    apiKey: "AIzaSyCkHHgb8-azjY8ib-PcgOxA2flTFYfX328",
    authDomain: "test-63bb0.firebaseapp.com",
    databaseURL: "https://test-63bb0.firebaseio.com",
    projectId: "test-63bb0",
    storageBucket: "test-63bb0.appspot.com",
    messagingSenderId: "96281038820",
    appId: "1:96281038820:web:f27d2c1cbc023193f6c1f1",
    measurementId: "G-7HZEZ789LZ"
  };
  
  firebase.initializeApp(firebaseConfig)

  const database = firebase.database();

  export {database};