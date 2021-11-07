import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";



//function form to add a movie
function AddMovie() {
    //grab the genres on pag load
    useEffect(() => {
        dispatch({
            type: 'FETCH_ALL_GENRE_FORM'
        })
    }, [])

    //dummy data created tp 
    const dummyDataNewMovie = {
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    }

    const history = useHistory();
    const dispatch = useDispatch();
    //where new movie information will live
    const [newMovie, setNewMovie] = useState(dummyDataNewMovie)
    //grab genres to set the select pull down
    const genres = useSelector(store => store.genres)

    //data need to collect
    //"title", "poster", "description", "genre_id"

    const handleSubmitMovie = (event) => {
        event.preventDefault();
        //test the data
        console.log(newMovie);
        // dispatch the new movie to a POST in index
        dispatch({
            type: 'ADD_NEW_MOVIE',
            payload: newMovie
        })
    } //end handleSubmitMovie


    console.log(genres);
    return (
        <>
            <button onClick={() => history.push('/')}>home</button>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmitMovie}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newMovie.title}
                    onChange={(event) => setNewMovie({ ...newMovie, title: event.target.value })}
                />
                <input
                    type="text"
                    placeholder="Poster URL"
                    value={newMovie.poster}
                    onChange={(event) => setNewMovie({ ...newMovie, poster: event.target.value })}
                />
                <input
                    type="text"
                    placeholder="description"
                    value={newMovie.description}
                    onChange={(event) => setNewMovie({ ...newMovie, description: event.target.value })}
                />

                <select value={newMovie.genre_id}
                    onChange={(event) => setNewMovie({ ...newMovie, genre_id: event.target.value })}>

                    <option disabled value='0'>
                        Choose Genre!
                    </option>

                    {genres.map((genre) => {
                        return (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        );
                    })}
                </select>
                <button type="submit">Add Movie</button>
            </form>
        </>
    )
}

export default AddMovie;