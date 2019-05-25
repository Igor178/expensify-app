import * as firebase from 'firebase'

// Firebase required configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

// Connecting to Firebase
firebase.initializeApp(firebaseConfig);

// referencing database to db variable
const db = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


export { firebase, googleAuthProvider, db as default }