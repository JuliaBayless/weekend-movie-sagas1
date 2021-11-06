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
    })

console.log('This is Genre', genres);
    return (
        <>
            <h2>Movie Details</h2>
            <button onClick={() => history.push('/')}>Home</button>
            <div>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
                <p>{movie.description}</p>
                <h4>Genre</h4>
                {genres?.map(genre => {
                    return (
                        <div key={genre.id}>
                            <p>{genre.join(', ')}</p>
                        </div>
                    );
                })}

            </div>
        </>
    )
} //end MovieDetails

export default MovieDetails