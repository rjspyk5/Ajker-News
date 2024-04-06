import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDv3ME-PIHMAeG5Lgl8OOqRMB3fWMloy1c",
  authDomain: "react-ajker-news.firebaseapp.com",
  projectId: "react-ajker-news",
  storageBucket: "react-ajker-news.appspot.com",
  messagingSenderId: "703746592350",
  appId: "1:703746592350:web:9bba42c5a5bea21cd06ecf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
