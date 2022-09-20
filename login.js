// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_INXx7IpF9b_zy-tWoVRmfV6Zg4YUge4",
  authDomain: "goodwill-new.firebaseapp.com",
  databaseURL: "https://goodwill-new-default-rtdb.firebaseio.com",
  projectId: "goodwill-new",
  storageBucket: "goodwill-new.appspot.com",
  messagingSenderId: "604955362561",
  appId: "1:604955362561:web:30c1a6adad63d8ae0c4700",
  measurementId: "G-KR9X6Y49CT"
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