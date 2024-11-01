// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwlWmCE93cyl6GYk20NLPFNDNjfAvnuWw",
  authDomain: "aurth-moha-milon-project.firebaseapp.com",
  projectId: "aurth-moha-milon-project",
  storageBucket: "aurth-moha-milon-project.appspot.com",
  messagingSenderId: "142057500200",
  appId: "1:142057500200:web:5fbc1942461ab11c9e0f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);