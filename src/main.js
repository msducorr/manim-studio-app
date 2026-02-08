import { SIGNUP_FORM, createUser,
    LOGIN_FORM, submitSignIn
 } from "./index.js";

function main() {
  // Handling sign up action
  if (SIGNUP_FORM) {
    SIGNUP_FORM.addEventListener("submit", () => {
      console.log("Sign up button clicked");
      createUser();
    });
  }

  // Handling login action
  if (LOGIN_FORM) {
    LOGIN_FORM.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Login form submitted");
      submitSignIn();
    });
  }
}

main();