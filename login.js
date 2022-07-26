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

//--------- USER LOGIN ---------------

  function userLogin() {
    console.log("function called");

    email = document.getElementById('email1').value;
    password = document.getElementById('password1').value
  
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Invalid Email or Password')
      return
    }
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      
        location.href = "user-dashboard.html";

      })
      .catch(function (error) {
        var error_code = error.code
        var error_message = error.message
        alert(error_message)
      })
  }


  //------------- Organisation login ----------------

  function orgLogin() {

    email = document.getElementById('email2').value;
    password = document.getElementById('password2').value;
  
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Invalid Email or Password')
      return
    }
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        
        location.href = "organization-dashboard.html";
      })
      .catch(function (error) {
        var error_code = error.code
        var error_message = error.message
        alert(error_message)
      })
  }


  //-------------- Validation ----------------------
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