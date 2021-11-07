import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";

export default function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();

    
    const handleSubmitDetails = (movie) => {
        dispatch({
            type: 'SET_MOVIE_DETAIL',
            payload: movie
        })

        history.push('/MovieDetails')
    }


    return (
        <Paper
            onClick={() => { handleSubmitDetails(movie) }}
            sx={{ height: 500, width: 400 }}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
        </Paper>
    )

} //end MovieItem