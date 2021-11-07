import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from "react-router";
import { Button } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';


function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const [spacing, setSpacing] = React.useState(2);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleSubmitDetails = (movie) => {
        dispatch({
            type: 'SET_MOVIE_DETAIL',
            payload: movie
        })

        history.push('/MovieDetails')
    }


    return (
        <main>
            <Button onClick={() => history.push('/AddMovie')}>Add Movie</Button>
            <h1>MovieList</h1>
            <Grid container justifyContent="center"
                sx={{ flexGrow: 1 }} container spacing={2}>

                {movies.map(movie => {
                    return (
                        <Grid item md={3}>
                            <Paper
                                onClick={() => { handleSubmitDetails(movie) }} key={movie.id}
                                sx={{ height: 500, width: 400 }}>
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} />
                            </Paper>
                        </Grid>
                    )
                })}






            </Grid>
            {/* <section className="movies">
                {movies.map(movie => {
                    return (
                        <div onClick={() => { handleSubmitDetails(movie) }} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section> */}
        </main>

    );
}

export default MovieList;