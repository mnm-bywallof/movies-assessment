import AddMovieDialog from './AddMovie'
import React, { Component , useState, useEffect} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import AddMovieModel from './AddMovie' 
import MovieCard from './MovieItem'
import Wallpaper from './wallpaper';

const Dashboard = ()=>{
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        //setMovies([1,2,4,5,6,6,6,,4])
    }, [movies])

    return (
        <Container>
            <AddMovieDialog></AddMovieDialog>
                <Row>
                    <MovieCard></MovieCard>
                    <MovieCard></MovieCard>
                    <MovieCard></MovieCard>
                    <MovieCard></MovieCard>
                    <MovieCard></MovieCard>
                    <MovieCard></MovieCard>

                    {
                        <MovieCard></MovieCard>
                    }
                </Row>
        </Container>
    );
}

export default Dashboard;
