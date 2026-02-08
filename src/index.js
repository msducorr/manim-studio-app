import { auth } from "./config/firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import { userMetadataDBPath } from "./config/db.js";

const username = document.querySelector('.users-name');
const password = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');
const firstNameEl = document.querySelector('.first-name');
const lastNameEl = document.querySelector('.last-name');


/* Button clicked -> Saves user input data -> call createUserFirebase function -> once completed then redirect to */

loginButton.addEventListener('click', () => {

        const userCredentials = {
        username: username.value,
        password: password.value
    };

    /* proper error handling for page rendering here */
    createUserWithEmailAndPassword(auth, userCredentials.username, userCredentials.password).then((result) => {
        pushUserMetadata(result.user.uid);
        console.log("User created successfully:", result.user);
        window.location.href = './pages/dashboard.html';
    }).catch((error) => {
        console.error("Error creating user:", error);
    });
 
   
})


function pushUserMetadata(uid) {

        push(userMetadataDBPath, {
            uid: uid,
            firstName: firstNameEl.value,
            lastName: lastNameEl.value
        } 
    )
}


