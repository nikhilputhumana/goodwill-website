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


// ---- Get user details -------

const auth = firebase.auth()
const database = firebase.database()

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    var mail = user.email;
    // console.log("Current user id is " + mail);
  }
  else {
    // User is signed out.
  }
})

console.log("Current user id is " + mail);

//----- Cloth ---------

function clothsubmit() {

  var ele = document.getElementsByName('gender');
  for(i = 0; i < ele.length; i++) {
    if(ele[i].checked)
      gen = ele[i].value;
    } 

  var messagesRef = firebase.database()
  .ref('clothes');

  document.getElementById('clothForm')
    .addEventListener('submit', submitForm);

    function submitForm(e) {
      e.preventDefault();
    
      // Get values
      var id2 = 0;
      // var usermail = mail;
      var gender1 = gen;
      var item1 = getInputVal('citem'); 
      var quantity1 = getInputVal('cquantity');
      var size1 = getInputVal('size');
      var cname1 = getInputVal('cname');
      var cnumber1 = getInputVal('cnumber');
      var caddress1 = getInputVal('caddress');
      var cpincode1 = getInputVal('cpincode');
    
      saveMessage( id2, gender1, item1, quantity1, size1, cname1, cnumber1, caddress1, cpincode1);  // 2nd: usermail,
      alert("Data added");
      // document.getElementById('clothForm').reset();
      location.reload();
    }
    
    // Function to get get form values
    function getInputVal(id) {
      return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage( id2,  gender1, item1, quantity1, size1, cname1, cnumber1, caddress1, cpincode1)  // 2nd: usermail,
    {
      var newMessageRef = messagesRef.push();
      var id2 = newMessageRef.getKey();
      newMessageRef.set({
        key: id2,
        // mail: usermail,
        gender: gender1,
        clothitem: item1,
        quantity: quantity1,
        size: size1,
        name: cname1,
        contact: cnumber1,
        address: caddress1,
        pin: cpincode1,
        status: "available"
      });
    }
}


//  ---------------- FOOD ------------------------------------

function foodsubmit() {

  var ele = document.getElementsByName('foodtype');
  for(i = 0; i < ele.length; i++) {
    if(ele[i].checked)
      foo = ele[i].value;
    } 

  var messagesRef = firebase.database()
  .ref('food');

  document.getElementById('foodForm')
    .addEventListener('submit', submitForm);

    function submitForm(e) {
      e.preventDefault();
    
      // Get values
      // var usermail = mail;
      var id1 = 0;
      var foo1 = foo;
      var item1 = getInputVal('fitem'); 
      var quantity1 = getInputVal('fquantity');
      var mandate1 = getInputVal('mandate');
      var mandtime1 = getInputVal('mantime');
      var expdate1 = getInputVal('expdate');
      var exptime1 = getInputVal('exptime');
      var fname1 = getInputVal('fname');
      var fnumber1 = getInputVal('fnumber');
      var faddress1 = getInputVal('faddress');
      var fpincode1 = getInputVal('fpincode');
    
      saveMessage(  id1, foo1, item1, quantity1, mandate1, mandtime1, expdate1, exptime1, fname1, fnumber1, faddress1, fpincode1); // 1st: usermail,
      alert("Data added");
      // document.getElementById('foodForm').reset();
      location.reload();
    }
    
    // Function to get form values
    function getInputVal(id) {
      return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage(  id1, foo1, item1, quantity1, mandate1, mandtime1, expdate1, exptime1, fname1, fnumber1, faddress1, fpincode1) // 1st: usermail,
    {
      var newMessageRef = messagesRef.push();
      // id1 = newMessageRef.child("food").push().getKey();
      var id1 = newMessageRef.getKey();
      newMessageRef.set({
        // mail: usermail,
        key: id1,
        type: foo1,
        fooditem: item1,
        quantity: quantity1,
        mfgdate: mandate1,
        mfgtime: mandtime1,
        expdate: expdate1,
        exptime: exptime1,
        name: fname1,
        contact: fnumber1,
        address: faddress1,
        pin: fpincode1,
        status: "available"
      });
    }
}



// -- Validation ---
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