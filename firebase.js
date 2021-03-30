import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDW5-TWW6wuQJh-NKVfUIHb81k-INVtEak",
    authDomain: "whatsapp-2-1f599.firebaseapp.com",
    projectId: "whatsapp-2-1f599",
    storageBucket: "whatsapp-2-1f599.appspot.com",
    messagingSenderId: "630797166895",
    appId: "1:630797166895:web:50910e068affe2a98d99da"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };