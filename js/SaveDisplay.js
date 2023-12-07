// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsYoFfwUbzeJgKNGnp9m0uNQQukx7gecE",
  authDomain: "database1-9a23b.firebaseapp.com",
  projectId: "database1-9a23b",
  storageBucket: "database1-9a23b.appspot.com",
  messagingSenderId: "86486126439",
  appId: "1:86486126439:web:1012829861c6359505a9c2",
  measurementId: "G-8D43VGFTBB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var currentUser = "";
var currentEmail = "";

// check if the user is logged in or out
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    currentUser = user.displayName;
    currentEmail = user.email;
    console.log("Logged in", currentUser, currentEmail);
  }
  else {
    console.log("User is logged out");
    window.location.href = "login.html";
  }
});

// sign out code
$("#signout").click(function() {
  firebase.auth().signOut().then(() => {
    console.log("User is signed out");
  }).catch((error) => {
    console.log(error.message);
  });
});

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

// update the result in table
