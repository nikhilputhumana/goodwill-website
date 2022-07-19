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

const user = firebase.auth().currentUser;

const displayName = user.displayName;
console.log("hai")
document.getElementById('orgname').innerHTML = displayName;


if (user) {
    console.log("fun call")
    // const displayName = user.displayName;
    // var displayName = new String("hello");
    console.log(displayName)
    //document.getElementById('orgname').innerHTML = displayName;
    // console.log(displayName);

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
}

