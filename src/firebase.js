import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkkY7nR9LmMxRhzS6mjf81BRVxdPpUw5Q",
    authDomain: "pra1-fc821.firebaseapp.com",
    databaseURL: "https://pra1-fc821.firebaseio.com",
    projectId: "pra1-fc821",
    storageBucket: "pra1-fc821.appspot.com",
    messagingSenderId: "776140136164",
    appId: "1:776140136164:web:28693adbc043c7d2c4d6f1"
  };

  var fireDb= firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
  