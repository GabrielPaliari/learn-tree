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

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    }
  ]
});

// Get the modal
var modal = document.getElementById('authModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'flex';
};

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
