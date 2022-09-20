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

firebase.auth().onAuthStateChanged(user => {
    if (user) {
      var mail = user.email;
      console.log("Current user id is " + mail);
      document.getElementById("orgname").innerHTML = mail;
    }
    else {
      // User is signed out.
    }
  })

  


  