import * as functions from "firebase-functions";

import { initializeApp } from "firebase-admin";

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

const db = app.firestore();

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const getShows = functions.https.onCall(async(data,context)=>{
    const coll = db.collection("movies");
    const docs =(await coll.get()).docs;
    const output = {
        movies:[],
        error:false,
        errorMessage:null
    }

    docs.forEach((doc)=>{
        const movie = doc.data();
        movie.id = doc.id;
        
        output.movies.push(movie);
    })
    

    return output;
})