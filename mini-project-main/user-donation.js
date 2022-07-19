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
      var gender1 = gen;
      var item1 = getInputVal('citem'); 
      var quantity1 = getInputVal('cquantity');
      var size1 = getInputVal('size');
      var cname1 = getInputVal('cname');
      var cnumber1 = getInputVal('cnumber');
      var caddress1 = getInputVal('caddress');
      var cpincode1 = getInputVal('cpincode');
    
      saveMessage( gender1, item1, quantity1, size1, cname1, cnumber1, caddress1, cpincode1);
      alert("Data added");
      document.getElementById('clothForm').reset();
    }
    
    // Function to get get form values
    function getInputVal(id) {
      return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage( gender1, item1, quantity1, size1, cname1, cnumber1, caddress1, cpincode1)
    {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        gender: gender1,
        clothitem: item1,
        quantity: quantity1,
        size: size1,
        name: cname1,
        contact: cnumber1,
        address: caddress1,
        pin: cpincode1
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
    
      saveMessage( foo1, item1, quantity1, mandate1, mandtime1, expdate1, exptime1, fname1, fnumber1, faddress1, fpincode1);
      alert("Data added");
      document.getElementById('foodForm').reset();
    }
    
    // Function to get get form values
    function getInputVal(id) {
      return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage( foo1, item1, quantity1, mandate1, mandtime1, expdate1, exptime1, fname1, fnumber1, faddress1, fpincode1)
    {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
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
        pin: fpincode1
      });
    }
}