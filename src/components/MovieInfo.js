import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteIcon from './constants/trash.png'
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

function MovieInfo(movieProps) {
  const movie = useLocation().state;
  console.log(movie);
  console.log(movieProps);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  function deleteMovie(){
    const deleteMovie = httpsCallable(functions, "deleteMovie");
    deleteMovie({id:movie.id}).then(()=>{
      alert("Successfully deleted "+movie.title);
      navigate(-1);
    }).catch(e => {
      console.log(e);
      alert("Failed to delete. Try again later")
    })
  }

  return (
    <Container fluid style={{minHeight:'100vh', background:`url(${movie.bannerUrl})`,backgroundSize:'cover', 
    backgroundPosition:'center',display:'flex',flexFlow:'column',justifyContent:'center'}}>
      <div style={{display:'flex',flexFlow:'column', padding:'20px', 
      backgroundColor:'rgb(0,0,0,.5)',color:'whitesmoke', maxWidth:'400px'}}>
        <h1>{movie.title}</h1>
        <label>{movie.type} &#x2022; {movie.year ? movie.year : 'Few years back'} &#x2022; {movie.genre ? movie.genre : 'Action'}</label>
        <div style={{display:'flex',flexFlow:'row',marginTop:'40px',columnGap:'20px'}}>
          <button type="button" class="btn btn-light">Continue</button>
          <button type="button" class="btn btn-light">Play from beginning</button>
          <button type="button" class="btn btn-danger" onClick={()=> deleteMovie()}>Remove from Catalog</button>
        </div>
      </div>
    </Container>
  );
}

export default MovieInfo;