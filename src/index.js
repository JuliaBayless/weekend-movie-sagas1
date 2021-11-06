import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRE_DETAILS', fetchGenreDetails);
    yield takeEvery('FETCH_ALL_GENRE_FORM', fetchAllGenre);
    yield takeEvery('ADD_NEW_MOVIE', addNewMovie);
}



//GET for all genres on FORM
function* fetchAllGenre() {
    // get genre from the DB as response
    try {
        const response = yield axios.get(`/api/genre`);
        console.log('This is all genre GET', response.data);
        yield put({
            type: 'SET_GENRES',
            payload: response.data
        });
    } catch {
        console.log('get all error');
    }
}



//GET to genre.router for genre details on selected movies
function* fetchGenreDetails(action) {
    // get genre from the DB as response
    try {
        const response = yield axios.get(`/api/genre/${action.payload}`);
        console.log('This is genre GET', response.data.data);
        yield put({
            type: 'SET_GENRE_DETAILS',
            payload: response.data
        });

    } catch {
        console.log('get all error');
    }

}


function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
}

//POST new movie to DB
function* addNewMovie(action) {
    try {
        axios.post('/api/movie', action.payload)
        yield put({ type: 'FETCH_MOVIES' });
    } catch (error) {
        console.log('get all error');
    }
} //end addNewMovie


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

/**** REDUCERS ****/

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}//end movies

// Used to store all genres returned from the server
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}//end genres


//Stores 1 selected movie for details page
const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAIL':
            return action.payload;
        default:
            return state;
    }
} //end movieDetails


//stores genre details from DB for selected movie -> /MovieDetails
const genreDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRE_DETAILS':
            return action.payload;
        default:
            return state;
    }
} //end genreDetails


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
        genreDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
