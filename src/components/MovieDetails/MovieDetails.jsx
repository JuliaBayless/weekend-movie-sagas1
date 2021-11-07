import './MovieDetails.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect } from 'react';
import { Container, Paper, Box } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


//style the image
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


// function to show movie details page
function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector(store => store.movieDetails);
    const genres = useSelector(store => store.genreDetails)

    //grab movie genres with movie id on 
    console.log('This is the detail movie ID', movie.id);
    useEffect(() => {
        dispatch({
            type: 'FETCH_GENRE_DETAILS',
            payload: movie.id
        })
    }, [])

    console.log('This is Genre', genres);
    return (

        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }} elevation={3}>
            <h2 className="movieDetailsHeader">Movie Details</h2>
            {/*conditional render to send user back to home page if 
            no movie has been chosen */}
            {movie.poster === undefined && <p> No movie is selected,
                please go back to <Link to="/">home</Link> page.
            </p>}

            <Grid container spacing={2}>
                <Grid item xs container direction="column" spacing={2}>
                    <h2>{movie.title}</h2>
                    {/* !Genre vs Genre vs Genres render wars! */}
                    <h5>
                        {genres.length > 0 && 'Genre'}
                        {genres.length > 1 && 's'}
                    </h5>
                    {genres?.map(genre => genre.name).join(', ')}
                </Grid>
                <Grid item xs container direction="column" spacing={2}>
                    {/* conditional to stop empty img tag from render */}
                   {movie.poster === undefined ? "" : <Img src={movie.poster} alt={movie.title}
                        sx={{ width: 300, height: 400 }} />}
                </Grid>
                <Grid Item>
                    <p>
                        {movie.description}
                    </p>

                </Grid>
                {/* close grid container */}
            </Grid>
        </Paper >
    )
} //end MovieDetails

export default MovieDetails