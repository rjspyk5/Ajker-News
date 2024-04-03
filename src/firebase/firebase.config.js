// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv3ME-PIHMAeG5Lgl8OOqRMB3fWMloy1c",
  authDomain: "react-ajker-news.firebaseapp.com",
  projectId: "react-ajker-news",
  storageBucket: "react-ajker-news.appspot.com",
  messagingSenderId: "703746592350",
  appId: "1:703746592350:web:9bba42c5a5bea21cd06ecf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
