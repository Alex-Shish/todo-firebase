// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiECt9AhkxmJBqtZBp49SM9l0kfj7bjP4",
    authDomain: "todo-06032023.firebaseapp.com",
    projectId: "todo-06032023",
    storageBucket: "todo-06032023.appspot.com",
    messagingSenderId: "1062842611126",
    appId: "1:1062842611126:web:10932a7784f0b4f4b3bd17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
