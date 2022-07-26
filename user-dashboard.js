//connecting with firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2JGamsis5w8M9pzuoWk1VboTrpfgYpdE",
  authDomain: "goodwill-e7efe.firebaseapp.com",
  databaseURL: "https://goodwill-e7efe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "goodwill-e7efe",
  storageBucket: "goodwill-e7efe.appspot.com",
  messagingSenderId: "146109014734",
  appId: "1:146109014734:web:fb136fe8563bcefd52e69f",
  measurementId: "G-T98YNWQCXP"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    var curmail = user.email;
    // console.log("Current user id is " + mail);
    document.getElementById("emailHead").innerHTML = curmail;
  }
  else {
    // User is signed out.
  }
})

