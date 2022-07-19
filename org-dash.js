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


var firebaseRef = firebase.database().ref("orgs/")

firebaseRef.on("value", function (snapshot) {

    snapshot.forEach(function (element) {
        // console.log(element.val().details);
        // console.log(element.val().email);
        document.getElementById("orgname").innerHTML = element.val().name

    });

})


/*


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        getUserData(user.uid)
    }
})

function getUserData(uid) {
    firebase.database().ref('users/' + uid).once("value", snap => {
        console.log(snap.val())
    })
}

const user = firebase.auth().currentUser;

console.log(user)

document.getElementById('orgname').innerHTML = user.displayName;

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

*/
