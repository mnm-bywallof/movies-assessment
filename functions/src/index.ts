import * as functions from "firebase-functions";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt8L_3lRhoM7mx1S2bby0nkOmhuMEFMQI",
  authDomain: "gg-movies-app.firebaseapp.com",
  projectId: "gg-movies-app",
  storageBucket: "gg-movies-app.appspot.com",
  messagingSenderId: "282048535921",
  appId: "1:282048535921:web:7a828611104feaa6542ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getShows = functions.https.onCall((data,context)=>{
    
})