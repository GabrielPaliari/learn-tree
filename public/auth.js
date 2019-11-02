// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAgS96iMfSShovv-V5NSze0tyvJZp7cabY',
  authDomain: 'learn-tree.firebaseapp.com',
  databaseURL: 'https://learn-tree.firebaseio.com',
  projectId: 'learn-tree',
  storageBucket: 'learn-tree.appspot.com',
  messagingSenderId: '471050362343',
  appId: '1:471050362343:web:574531c7d3f7f477fa3142',
  measurementId: 'G-R8HL4M055W'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();
var loggedUser = {};

function getUsers() {
  database;
}

function writeUserData(user) {
  const userRef = database.ref('users/' + user.uid);

  userRef.once('value').then(snapshot => {
    if (snapshot.exists()) {
      // Updates User
      const userObject = {
        ...snapshot.val(),
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous
      };
      userRef
        .update(userObject)
        .then(user => {
          loggedUser = userObject;
          console.log('user updated: ', userObject);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // Creates user
      const userObject = {
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous,
        isAdmin: false
      };
      userRef
        .set(userObject)
        .then(user => {
          loggedUser = userObject;
          console.log('user saved: ', userObject);
        })
        .catch(error => {
          console.log(error);
        });
    }
  });
}

const provider = new firebase.auth.GoogleAuthProvider();

var ui = new firebaseui.auth.AuthUI(firebase.auth());

// Get the modal
var modal = document.getElementById('authModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    writeUserData(user);
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        }
      ],
      signInFlow: 'popup'
    });
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('signedOut');
    })
    .catch(error => {
      console.log(error);
    });
}

function redirectIfNotLogged() {
  window.location.href = window.location.href + 'signin.html';
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function login(ev) {
  console.log(document.getElementById('email').value);
  console.log(document.getElementById('password').value);
}
