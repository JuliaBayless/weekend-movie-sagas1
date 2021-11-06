import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


//function form to add a movie
function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newMovie, setNewMovie] = useState('')


    //"title", "poster", "description"

    const handleSubmitMovie = () => {


    }


    return (
        <>
            <h2>Add Movie</h2>
            <button onClick={() => history.push('/MovieDetails')}>home</button>
            <form onSubmit={handleSubmitMovie}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newMovie}
                    onChange={(event) => {setNewMovie({title: event.target.value})}}
                />
                 <input
                    type="text"
                    placeholder="title"
                    value={newMovie}
                    onChange={(event) => {setNewMovie({title: event.target.value})}}
                />
                 <input
                    type="text"
                    placeholder="title"
                    value={newMovie}
                    onChange={(event) => {setNewMovie({title: event.target.value})}}
                />
                    


                <button type="submit">Add Movie</button>
            </form>
        </>
    )
}

export default AddMovie;