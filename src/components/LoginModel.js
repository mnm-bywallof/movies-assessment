import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import logo from './constants/logo';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";

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

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const Login = ()=>{
    const auth = getAuth();
    const [loggedInUser, setUserLoggedIn] = useState(undefined)
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUserLoggedIn(user);
            }else{
                setUserLoggedIn(undefined);
            }
        })
    })

    const handleClose = ()=> setVisible(false);
    const googleSignIn = ()=>{

        if(loggedInUser){
            signOut(auth).then(()=>{
                setUserLoggedIn(undefined);
                setVisible(false);
            }).catch(e=>{
                setUserLoggedIn(loggedInUser);
            })
        }else{
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        }
    }

    return (
        <>
        <Modal show={visible} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body style={{display:'flex',flexFlow:'column',justifyContent:'center',textAlign:'center'}}>
            <img src={logo} width={'50px'} height={'auto'} style={{textAlign:'center',margin:'0 auto'}}/>
            <label>Something new is coming</label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={googleSignIn}>
            {loggedInUser ? "Sign out" : "Google Sign in"}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <label onClick={()=>{setVisible(true)}}>{loggedInUser ? `${loggedInUser.email}` : "Sign in"}</label>
        </>
    )
}

export default Login