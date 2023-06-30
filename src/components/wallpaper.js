import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import MoviewInfo from './MovieInfo';

import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const app = initializeApp({
    apiKey: "AIzaSyAt8L_3lRhoM7mx1S2bby0nkOmhuMEFMQI",
    authDomain: "gg-movies-app.firebaseapp.com",
    projectId: "gg-movies-app",
    storageBucket: "gg-movies-app.appspot.com",
    messagingSenderId: "282048535921",
    appId: "1:282048535921:web:7a828611104feaa6542ad0"
});
const functions = getFunctions(app);

const Wallpaper = (props)=>{
    const [movie, setMovie] = useState({
        title:'Luther: The Fallen Sun',
        description: `${'A serial killer terrorizes London while disgraced detective John Luther sits behind bars. Haunted by his failure to capture the cyber psychopath who now taunts him, Luther decides to break out of prison to finish the job by any means necessary.'}`,
        bannerUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ca7462cd88e3c7b20a973a39115c5a27f6dce9d5faf1aedc5d36d2ed0423f82b._RI_TTW_.jpg',
        coverUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEibJWvunX2oMwlTaR2Rz2vqqx329LwU-tjm_rcPiGeK24I7rj',
        id:'someID'
    });

    useEffect(()=>{
        const getNext = httpsCallable(functions, "getNext");
        getNext({}).then((value)=>{
            console.log(value);
            setMovie(value.data.item);
        }).catch(e => console.error(e));
    }, []);

    return (
        <Container fluid style={{backgroundColor:'tomato', minHeight:'70vh', 
        backgroundImage:`url(${movie.bannerUrl})`,
        display:'flex',flexFlow:'column',justifyContent:'end', padding:'0', margin:'0',
        backgroundPosition:'center', backgroundSize:'cover'}}>
            <div style={{margin:'0 auto',backgroundImage:'linear-gradient(transparent, black)',
            paddingTop:'100px',width:'100%',padding:'0px',display:'flex',flexFlow:'row',justifyContent:'center'}}>
                <div style={{margin:'0 auto',textAlign:'center', maxWidth: '500px', paddingBottom:'50px', color:'whitesmoke'}}>
                    <img src={`${movie.coverUrl}`}
                        width={'200px'} height={'auto'} style={{border:'black 2px solid'}}/>
                    <h1 style={{fontFamily:'sans-serif'}}>{`${movie.title}`}</h1>
                    <label>{`${movie.description}`}</label>
                    <MoviewInfo text={"More"} movie={movie}></MoviewInfo>
                    <Button type='button'>Watched</Button>
                </div>
            </div>
        </Container>
    )
}

export default Wallpaper;