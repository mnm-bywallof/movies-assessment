import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import logo from './constants/logo';
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from 'firebase/functions';
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

const functions = getFunctions(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const Login = ()=>{
    const auth = getAuth();
    const [loggedInUser, setUserLoggedIn] = useState(undefined)
    const [visible, setVisible] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUserLoggedIn(user);
                const getUserDetails = httpsCallable(functions, "getUserDetails");
                getUserDetails({}).then((details)=>{
                    console.log(details);
                    setMovies(details.data.movies);
                }).catch(e=>{
                    console.log(e);
                })
            }else{
                setUserLoggedIn(undefined);
            }
        })
    }, [loggedInUser])

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
                const getUserDetails = httpsCallable(functions, "getUserDetails");
                getUserDetails({}).then((details)=>{
                    console.log(details)
                }).catch(e=>{
                    console.log(e);
                })
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
            {
                loggedInUser ? loggedInUser.email :'Sign in to view the best movies the world of Netflix has to offer.'
            }
            <label>
                {movies.length > 0 ? "You have watched " + movies.length +" movies" : "No movies recorded."}
            </label>
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
      <label onClick={()=>{setVisible(true)}}>{loggedInUser ? `${"Account"}` : "Sign in"}</label>
        </>
    )
}

export default Login