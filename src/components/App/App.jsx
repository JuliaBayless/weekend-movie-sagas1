import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovies/AddMovie';


function App() {

  
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/MovieDetails">

          <MovieDetails />

        </Route>
         {/* Add Movie page */}
        <Route path="/AddMovie">
        <AddMovie />
        </Route>

      </Router>
    </div>
  );
}


export default App;
