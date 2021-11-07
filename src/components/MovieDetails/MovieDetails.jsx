import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect } from 'react';
import { Button } from '@material-ui/core';


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
        <>
            <Button onClick={() => history.push('/')}>Home</Button>
            <h2>Movie Details</h2>
            {/*conditional render to send user back to home page if 
            no movie has been chosen */}
            {!movie && <p> No movie is selected,
                please go back to <Link to="/">home</Link> page.
            </p>}

            <div>
                <h3>{movie.title}</h3>
                {/* Genre vs Genres render wars! */}
                <h5>Genre{genres.length > 1 && 's'}</h5>
                {genres?.map(genre => genre.name).join(', ')}
                <div className="movieImage">
                    <img src={movie.poster} alt={movie.title} />
                </div>
                <p>{movie.description}</p>
            </div>
            <p>No movie is selected, please go back to the <Link to="/">Home</Link> page.</p>
        </>
    )
} //end MovieDetails

export default MovieDetails