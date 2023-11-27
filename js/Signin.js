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
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = 'jjsharp224@gmail.com';
  var password = 'asdfgh';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in successful');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add a google login choice here 
$('#google').click(function() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then();
});