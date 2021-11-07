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
                <Container>
            <h2 className="movieDetailsHeader">Movie Details</h2>
            {/*conditional render to send user back to home page if 
            no movie has been chosen */}
            {genres.length === 0 && <p> No movie is selected,
                please go back to <Link to="/">home</Link> page.
            </p>}

            <div>
                <h3>{movie.title}</h3>
                {/* !Genre vs Genre vs Genres render wars! */}
                <h5>
                    {genres.length > 0 && 'Genre'}
                    {genres.length > 1 && 's'}
                </h5>
                {genres?.map(genre => genre.name).join(', ')}
                <Box>
                    <img src={movie.poster} alt={movie.title} />
                </Box>
                <p>{movie.description}</p>
            </div>

           
        </Container>
        </Paper>
    )
} //end MovieDetails

export default MovieDetails