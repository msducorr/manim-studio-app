import { 
  createUserWithEmailAndPassword,
  updateProfile,
   signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { auth } from "./config/firebase.js";

export const SIGNUP_FORM = document.getElementById("signupForm");
export const SIGNUP_FIRST_NAME = document.getElementById("signupFirstName");
export const SIGNUP_LAST_NAME = document.getElementById("signupLastName");
export const SIGNUP_EMAIL = document.getElementById("signupEmail");
export const SIGNUP_PASSWORD = document.getElementById("signupPassword");
export const SIGNUP_CONFIRM_PASSWORD = document.getElementById("signupConfirmPassword");
export const SIGNUP_MODAL = document.getElementById("signupModal");
export const SIGNUP_ERROR_SUMMARY = document.getElementById("signupErrorSummary");
export const SIGNUP_EMAIL_GROUP = document.getElementById("signupEmailGroup");
export const SIGNUP_PASSWORD_GROUP = document.getElementById("signupPasswordGroup");
export const SIGNUP_CONFIRM_PASSWORD_GROUP = document.getElementById("signupConfirmPasswordGroup");

// Login Form Elements
export const LOGIN_FORM = document.getElementById("loginForm");
export const LOGIN_EMAIL = document.getElementById("loginEmail");
export const LOGIN_PASSWORD = document.getElementById("loginPassword");
export const LOGIN_MODAL = document.getElementById("loginModal");
export const LOGIN_ERROR_SUMMARY = document.getElementById("loginErrorSummary");
export const LOGIN_EMAIL_GROUP = document.getElementById("loginEmailGroup");
export const LOGIN_PASSWORD_GROUP = document.getElementById("loginPasswordGroup");



export function createUser() {

    const userCredentials = {
      firstName: SIGNUP_FIRST_NAME.value,
      lastName: SIGNUP_LAST_NAME.value,
      email: SIGNUP_EMAIL.value,
      password: SIGNUP_PASSWORD.value
    };

    const emailValidation = validateEmail(userCredentials.email);
    const passwordValidation = validatePassword(userCredentials.password);

    if (!emailValidation.isValid || !passwordValidation.isValid) {
        console.log("Unable to user, please input correct info.");
        return;
    }

    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then(({ user }) => {
        console.log('succesfull created user', user.uid);
        updateProfile(user, {
          displayName: `${userCredentials.firstName} ${userCredentials.lastName}`.trim()
        });
        window.location.href = "dashboard.html";
      })
      .catch(error => {
        console.error("Unable to create user:", error);
      });
  
    
 
}


export function submitSignIn() {
    const userCredentials = {

      email: LOGIN_EMAIL.value,
      password: LOGIN_PASSWORD.value
    
    };

    const emailValidation = validateEmail(userCredentials.email);
    const passwordValidation = validatePassword(userCredentials.password);

    if (!emailValidation.isValid || !passwordValidation.isValid) {
        console.log("Unable to validate user, please input correct info.");
        return;
    }

    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .then((userCredential) => {
    console.log("User logged in:", userCredential.user.uid);
    LOGIN_ERROR_SUMMARY.classList.remove('show');
    window.location.href = "dashboard.html";
  })
  .catch((error) => {
    console.error("Login error:", error.message);
    LOGIN_ERROR_SUMMARY.innerHTML = `<ul><li>Incorrect login credentials</li></ul>`;
    LOGIN_ERROR_SUMMARY.classList.add('show');
  });

}