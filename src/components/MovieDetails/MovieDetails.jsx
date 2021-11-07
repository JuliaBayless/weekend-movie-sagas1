import './MovieDetails.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect } from 'react';
import { Container, Paper, Box, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


//style the image
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

//styling 
const useStyles = makeStyles(() => ({
    paper:{
        margin: "40px"
    },
    description: {
        padding: "30px"
    },
    title: {
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingBottom: "30px"
    }
}))


// function to show movie details page
function MovieDetails() {
    const dispatch = useDispatch();
    const movie = useSelector(store => store.movieDetails);
    const genres = useSelector(store => store.genreDetails);
    const { paper, description, title } = useStyles();

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

        <Paper elevation={3} sx={{ flexGrow: 1 }} className={paper}>
             <Grid container spacing={2}>
             <Grid item xs={12}>
            <h2 className="movieDetailsHeader">Movie Details</h2>
            {/*conditional render to send user back to home page if 
            no movie has been chosen */}
            {movie.poster === undefined && <p> No movie is selected,
                please go back to <Link to="/">home</Link> page.
            </p>}
                </Grid>
           
                <Grid item xs={6}>
                    
                    <Typography 
                    variant="h4" 
                    gutterBottom 
                    component="div"
                    className={title}
                    >
                        {movie.title}
                    </Typography>
                    {/* !Genre vs Genre vs Genre's' render wars! */}
                    <Typography variant="h6" 
                    gutterBottom component="div"
                    className={description}>
                        {genres.length > 0 && 'Genre'}
                        {genres.length > 1 && 's'}
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                    {genres?.map(genre => genre.name).join(',  ')}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    {/* conditional to stop empty img tag from render */}
                    {movie.poster === undefined ? "" : <Img src={movie.poster} alt={movie.title}
                        sx={{ width: 300, height: 400 }} />}
                </Grid>
                <Grid Item xs={12} className={description}>
                    <Typography variant="h5" gutterBottom component="div">
                        {movie.description}
                    </Typography>

                </Grid>
                {/* close grid container */}
            </Grid>
        </Paper >
    )
} //end MovieDetails

export default MovieDetails