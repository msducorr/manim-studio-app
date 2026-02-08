import { auth } from './config/firebase.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// inital user login check 

const welcomeMessageEl = document.querySelector('.users-name');

onAuthStateChanged(auth, user => {
  if (!user) {
    console.log("No user is signed in.");
    // redirect to login page
    window.location.href = './index.html';
    return;
  }

  // logged in
  const uid = user.uid;
  const email = user.email;
  console.log(auth.currentUser.email + " is signed in with UID: " + uid);
  
  // update welcome message with user email
  welcomeMessageEl.innerHTML = email;
});
