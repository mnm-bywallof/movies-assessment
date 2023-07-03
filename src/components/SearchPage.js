import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import {Row, Col, Container} from 'react-bootstrap'

import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { Link } from 'react-router-dom';

const app = initializeApp({
    apiKey: "AIzaSyAt8L_3lRhoM7mx1S2bby0nkOmhuMEFMQI",
    authDomain: "gg-movies-app.firebaseapp.com",
    projectId: "gg-movies-app",
    storageBucket: "gg-movies-app.appspot.com",
    messagingSenderId: "282048535921",
    appId: "1:282048535921:web:7a828611104feaa6542ad0"
});
const functions = getFunctions(app);

const Search = ()=>{
    const [show, setShow] = useState(false);
    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useState("");
    const handleClose = ()=> setShow(false);

    useEffect(()=>{
        const search = httpsCallable(functions, "search");
        search({term:term}).then((data)=>{
            const movies = data.data;
            console.log(movies.movies);
            setMovies(movies.movies);
        })
    }, [term])
    return (
        <Container style={{justifyContent:'center',alignItems:'center',maxWidth:'500px'}}>
        <Form.Control type='text' placeholder={`Tile, description or type`} onChange={(e)=>{
                console.log(e.target.value)
                setTerm(e.target.value);
            }} id='eTitle'/>
            <Col>
            {
                movies.map((movie)=> (<MovieItem movie={movie} key={movie.id}/>))
            }
            </Col>
        </Container>
    );
}

const MovieItem = (props)=>{
    const movie = props.movie;
    return(
        <div style={{display:'flex',flexFlow:'row', padding:'10px', border:'1px solid transparent', marginBottom:'10px'}}>
        <img src={`${movie.coverUrl}`} height={'100px'} width={'auto' }  style={{padding:'10px'}}/>
        <span style={{width:'50%', display:'flex',flexFlow:'column',justifyContent:'center'}}>
            <h3 style={{padding:'0px',margin:'0px'}}>{`${movie.title}`}</h3>
            <label>{`${movie.type}`}</label>
            {/* <lable>{`${movie.type}`}</lable> */}
        </span>
        <Link state={movie} to={"/movie"} style={{height:'50px',
        display:'flex',flexFlow:'column',margin:'auto 0',justifyContent:'center'}}><Button onClick={()=>{}} className="btn btn-primary">Watch</Button></Link>
        </div>
    );
}

export default Search