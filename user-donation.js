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
  
  
  //initializing firebase
  firebase.initializeApp(firebaseConfig);







function clothsubmit() {



    gender = document.getElementById('genderselect').value
    item = document.getElementById('item').value
    quantity = document.getElementById('quantity').value
    size = document.getElementById('sizeselect').value
    sizeininches = document.getElementById('sizeininches').value

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('food/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl
        });
      }

}




function clothsubmit() {

  
  }