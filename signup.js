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

const auth = firebase.auth();
const database = firebase.database();

//register function defination from signup page
function register() {

  var email= document.getElementById('email1').value
  var password= document.getElementById('password1').value
  var address = document.getElementById('inputAddress').value
  var inputName = document.getElementById('inputName').value
  var phone = document.getElementById('inputPhone').value
  var district = document.getElementById('inputDisrict').value
  var pincode = document.getElementById('inputZip').value


  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
        email: email,
        address: address,
        name: inputName,
        phone: phone,
        district: district,
        pincode: pincode,
        last_login: Date.now()
      }
      database_ref.child('users/' + user.uid).set(user_data)
      alert('User Created')
    })
    .catch(function (error) {
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })
}



function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    return true
  } else {
    return false
  }
}

function validate_password(password) {
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}