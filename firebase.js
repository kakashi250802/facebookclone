import firebase from 'firebase'
import "@firebase/storage"
import '@firebase/firestore'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4YKSQMG8xcE0OQ-nrxHhxVI4DUaBLLJU",
    authDomain: "facebook-ver2-e1e50.firebaseapp.com",
    projectId: "facebook-ver2-e1e50",
    storageBucket: "facebook-ver2-e1e50.appspot.com",
    messagingSenderId: "831863932343",
    appId: "1:831863932343:web:8569124c70550def251432"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();
export { db, storage };