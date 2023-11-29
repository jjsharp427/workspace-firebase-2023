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

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var email = $('input[name="email"]').val();
  var password = $('input[name="password"]').val();
  var confirmedpass = $('input[name="conpassword"]').val();

  // check if password and confirmed password are the same
  if (password!=confirmedpass) {
    alert("Passwords do not match.");
  }
  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result => {
      // Signed in
      let user = result.user;
      user.updateProfile({
        displayName: username
      }).then(()=>{
        console.log(user.displayName,"is signed up");

        var date = "Wed 29 Nov 2023";
        var userInfo = {
        "usernmame": user.displayName,
        "email": email,
        "signupDate": date
      };
      var db = firebase.firestore();
      db.collection("userMembers").doc(user.name).set(userInfo).then(()=>{
        console.log("info has been stored");
        window.location.href = "Login.html";
      });
      }); 
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
