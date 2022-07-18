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


//------------------- USER ---------------------------------
//register function defination from signup page
function registeruser() {

  console.log("User function called")

  var email= document.getElementById('email1').value
  var password= document.getElementById('password1').value
  var address = document.getElementById('inputAddress').value
  var inputName = document.getElementById('inputName').value
  var phone = document.getElementById('inputPhone').value
  var district = document.getElementById('inputDisrict').value
  var pincode = document.getElementById('inputZip').value

  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Invalid Email or Password')
    return
  }

  if (validate_phone(phone) == false) {
    alert('Invalid Phone number')
    return
  }

  if (validate_field(address && inputName && district && pincode) == false) {
    alert('Fill out the missing fields!')
    return
  }


  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
        email: email,
        password: password,
        address: address,
        name: inputName,
        phone: phone,
        district: district,
        pincode: pincode,
        last_login: Date.now()
      }
      database_ref.child('users/' + user.uid).set(user_data)
      alert('User Registered \n\nPlease login to continue');
      window.location.replace('./login.html');
    })
    .catch(function (error) {
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })

}

//-------------------------ORGANISATION----------------------------

function registerorg() {

  console.log("Organisation function called");

  var email= document.getElementById('orgEmail').value
  var password= document.getElementById('orgPassword').value
  var address = document.getElementById('orgAddress').value
  var inputName = document.getElementById('orgName').value
  var phone = document.getElementById('orgPhone').value
  var district = document.getElementById('orgDisrict').value
  var pincode = document.getElementById('orgZip').value
  var registernum = document.getElementById('orgReg').value

  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Invalid Email or Password')
    return
  }

  if (validate_phone(phone) == false) {
    alert('Invalid Phone number')
    return
  }

  if (validate_field(address && inputName && district && pincode && registernum) == false) {
    alert('Fill out the missing fields!')
    return
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
        email: email,
        password: password,
        address: address,
        name: inputName,
        phone: phone,
        district: district,
        pincode: pincode,
        registernum: registernum,
        last_login: Date.now()
      }

      if (validate_email(email) == false || validate_password(password) == false) {
        alert('Invalid Email or Password')
        return
      }
    
      if (validate_phone(phone) == false) {
        alert('Invalid Phone number')
        return
      }
      
      database_ref.child('orgs/' + user.uid).set(user_data)
      alert('Organisation Registered \n\nPlease Login to continue')
      window.location.replace('./login.html');
    })
    .catch(function (error) {
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })

}


// --- functions for validation ---

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

function validate_phone(num) {
  if (num == null) {
    return false
  }

  if (num.length < 10) {
    return false
  } else {
    return true
  }
}
