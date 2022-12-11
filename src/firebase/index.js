// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBOjwgasP0i3EHBRnUz6QAmkVvC99ncfpA",
	authDomain: "vue-auth-af311.firebaseapp.com",
	projectId: "vue-auth-af311",
	storageBucket: "vue-auth-af311.appspot.com",
	messagingSenderId: "348708568813",
	appId: "1:348708568813:web:e4b9d57b59408049ab56e4",
	measurementId: "G-3ZVMDX0NYQ",
	databaseURL: "https://vue-auth-af311,default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, database };

