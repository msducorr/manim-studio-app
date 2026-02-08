import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const appConfig =  {
  apiKey: "AIzaSyBDY_aLSkSM5D4QDJ1oDqrvTznndd1hv54",
  authDomain: "manim-studio-9d009.firebaseapp.com",
  projectId: "manim-studio-9d009",
  storageBucket: "manim-studio-9d009.firebasestorage.app",
  messagingSenderId: "102060733440",
  appId: "1:102060733440:web:d9db0734d84e4be77dd4e5",
  measurementId: "G-F4X3TQTSY6"
};

export const app = initializeApp(appConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);