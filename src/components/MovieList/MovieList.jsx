import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from "react-router";
import { Button, Container } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import MovieItem from '../MovieItem/MovieItem';


function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const [spacing, setSpacing] = React.useState(2);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);



    return (
        <main>
            <Button onClick={() => history.push('/AddMovie')}>Add Movie</Button>
            <h1>MovieList</h1>
            <Container>
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
        </main>

    );
}

export default MovieList;