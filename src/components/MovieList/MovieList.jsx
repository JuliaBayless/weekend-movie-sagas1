import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './MovieList.css'
import { useHistory } from "react-router";

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    

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
            <h1>MovieList</h1>
            <Link className="linkAddMovie" to="/AddMovie">Add Movie</Link>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div onClick={() => {handleSubmitDetails(movie)}} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;