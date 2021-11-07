import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import './MovieList.css'
import { useHistory } from "react-router";
import { Container, Paper } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { positions } from '@mui/system';
import MovieItem from '../MovieItem/MovieItem';


function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
  

    //grab movies from the reducer
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
            <Container>
                <h1>MovieList</h1>
                <Grid container justifyContent="center"
                    sx={{ flexGrow: 1 }} container spacing={4}>
                    {movies.map(movie => {
                        return (
                            <Grid item key={movie.id} xs={12} sm={6} md={5} lg={4}>
                                <MovieItem movie={movie} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>

    );
}

export default MovieList;