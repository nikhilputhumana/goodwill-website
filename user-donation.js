function MDate() {
  var UserDate = document.getElementById("mandate").value;
  var ToDate = new Date();
  if (new Date(UserDate).getTime() > ToDate.getTime()) {
        alert("The Date must be Lesser or Equal to today date");
        return false;
   }
  return true;
}

function EDate() {
  var UserDate = document.getElementById("expdate").value;
  var ToDate = new Date();
  if (new Date(UserDate).getTime() < ToDate.getTime()) {
        alert("The Date must be Bigger or Equal to today date");
        return false;
   }
  return true;
}


//connecting with firebase
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
  let sub = false;

  var ele = document.getElementsByName('gender');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      gen = ele[i].value;
  }

  var messagesRef = firebase.database()
    .ref('clothes');

  document.getElementById('clothForm')
    .addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    var savems = 1;
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

    if (validate_phone(cnumber1)) {
      alert('Invalid Phone number')
      savems = 0
      return
    }

    if (validate_pin(cpincode1)) {
      alert('Invalid Pin Code')
      savems = 0
      return
    }

    if (savems == 1) {
      saveMessage(id2, gender1, item1, quantity1, size1, cname1, cnumber1, caddress1, cpincode1);  // 2nd: usermail,
      alert("Data added");
      document.getElementById('clothForm').reset();
      // location.reload();
    }

  }

  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(id2, gender1, item1, quantity1, size1, cname1, cnumber1, caddress1, cpincode1)  // 2nd: usermail,
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
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      foo = ele[i].value;
  }

  var messagesRef = firebase.database()
    .ref('food');

  document.getElementById('foodForm')
    .addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    var savems = 1;
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

    if (validate_pin(fpincode1)) {
      alert('Invalid Pin Code')
      savems = 0;
      return
    }

    if (validate_phone(fnumber1)) {
      alert('Invalid phone number')
      savems = 0
      return
    }

    if (savems == 1) {
      saveMessage(id1, foo1, item1, quantity1, mandate1, mandtime1, expdate1, exptime1, fname1, fnumber1, faddress1, fpincode1)  // 1st: usermail,
      alert("Data added");
      document.getElementById('foodForm').reset();
      
      // location.reload();
    }
    
  }

  // Function to get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(id1, foo1, item1, quantity1, mandate1, mandtime1, expdate1, exptime1, fname1, fnumber1, faddress1, fpincode1) // 1st: usermail,
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



// -- Validations ---
function validate_phone(num) {
  if ((num == null) || (num.length < 10) || (num.length > 13)) {
    return true
  }
}

function validate_pin(pin) {
  if (pin.length != 6) {
    return true
  } else {
    return false
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