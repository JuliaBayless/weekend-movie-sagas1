import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import './AddMovies.css'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem, TextareaAutosize, Button, Input } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import { Paper, Box, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';

//make styles
const useStyles = makeStyles(() => ({
    input: {
        background: '#FFFFFF',
        margin: "20px",
    },
    button: {
        color: '#FFFFFF',
        background: '#af4448',
        margin: "20px",
       
    },
    button2: {
        margin: "20px",
    },
    paper: {
        margin: "60px",
        padding: "40px",
    },
}));


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

    //grab styles
    const { input, button, paper, button2 } = useStyles();
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
        // dispatch the new movie to a POST in index
        dispatch({
            type: 'ADD_NEW_MOVIE',
            payload: newMovie
        })
        history.push('/')
    } //end handleSubmitMovie


    console.log(genres);
    return (
        <>
            <h2 className="movieAddHeader">Add Movie</h2>
            <Paper elevation={3} sx={{ flexGrow: 1 }} className={paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <form onSubmit={handleSubmitMovie}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="filled-required"
                                    type="text"
                                    placeholder="Title"
                                    className={input}
                                    value={newMovie.title}
                                    onChange={(event) =>
                                        setNewMovie({ ...newMovie, title: event.target.value })}
                                />
                            </Grid>
                            {/* padding in between texts-> 
                            was not working in styles */}
                            <div className={input}></div>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="filled-required"
                                    type="text"
                                    placeholder="Poster URL"
                                    className={input}
                                    value={newMovie.poster}
                                    onChange={(event) =>
                                        setNewMovie({ ...newMovie, poster: event.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    rows={10}
                                    rowsMax={10}
                                    type="text"
                                    className={input}
                                    placeholder="description"
                                    style={{ width: "25%" }}
                                    value={newMovie.description}
                                    onChange={(event) =>
                                        setNewMovie({ ...newMovie, description: event.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl sx={{ m: 1, minWidth: 220 }} className={input}>
                                    <InputLabel id="demo-simple-select-label">Choose Genre!</InputLabel>
                                    <Select value={newMovie.genre_id}
                                        sx={{ minWidth: 120 }}
                                        onChange={(event) =>
                                            setNewMovie({ ...newMovie, genre_id: event.target.value })}>


                                        {genres.map((genre) => {
                                            return (
                                                <MenuItem key={genre.id} value={genre.id}>
                                                    {genre.name}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    className={button}
                                    type="submit">Add Movie</Button>
                                <Button
                                    className={button2}
                                    variant="outlined"
                                    onClick={()=>{history.push('/')}}>Cancel</Button>
                            </Grid>
                        </form>
                        {/* </Box> */}

                    </Grid>
                    {/* close grid container */}
                </Grid>
            </Paper >
        </>
    )
}

export default AddMovie;