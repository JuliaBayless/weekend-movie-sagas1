import { useHistory } from "react-router";


//function form to add a movie
function AddMovie() {
 const history = useHistory();

    return (
        <>
            <h2>Add Movie</h2>
            <button onClick={()=>history.push('/MovieDetails')}>Home</button>
        </>
    )
}

export default AddMovie;