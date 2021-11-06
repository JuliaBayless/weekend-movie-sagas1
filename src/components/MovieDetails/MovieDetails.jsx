import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect } from 'react';


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
            <h2>Movie Details</h2>
            <button onClick={() => history.push('/')}>Home</button>
            <div>
                <h3>{movie.title}</h3>
                <h5>Genre{ genres.length > 1 && 's'}</h5>
                {genres?.map(genre => genre.name).join(', ')}
                <div className="movieImage">
                <img src={movie.poster} alt={movie.title} />
                </div>
                <p>{movie.description}</p>
            </div>
        </>
    )
} //end MovieDetails

export default MovieDetails