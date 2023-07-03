import AddMovieDialog from './AddMovie'
import React, { Component , useState, useEffect} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import AddMovieModel from './AddMovie' 
import MovieCard from './MovieItem'
import Wallpaper from './wallpaper';

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

const Dashboard = ()=>{
    const [movies, setMovies] = useState(new Array());

    useEffect(()=>{
        const calbShows = httpsCallable(functions, "getShows");
        calbShows().then((results)=>{
            // console.log(results.data);
            setMovies(results.data.list);
        }).catch( e => {
            console.error(e);
        })
    }, [])

    return (
        <Container fluid style={{textAlign:'center'}}>
            <Wallpaper/>

            <h1 style={{marginTop:'30px'}}>More for you</h1>
            <Row style={{justifyContent:'center', display:'flex',flexFlow:'row',flexWrap:'wrap',}}>
                {movies.map((item, index) => (
                    <MovieCard movie={item} key={item.id}/>
                ))}
            </Row>
        </Container>
    );
}

export default Dashboard;
