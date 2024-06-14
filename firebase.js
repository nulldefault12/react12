// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
 // apiKey:AIzaSyBOUenIFU52wbQK9kD9CWPgiCczBw_yhF4,
  authDomain: "react2-274ca.firebaseapp.com",
  projectId: "react2-274ca",
  storageBucket: "react2-274ca.appspot.com",
  messagingSenderId: "836676649988",
  appId: "1:836676649988:web:ddf383fcdc645a9bafe151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const auth = getAuth(app);
//const analytics = getAnalytics(app);

/*buat ini untuk menyambungkan firebase dengan page-js kita*/
//export {auth}
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


export default firebase;
