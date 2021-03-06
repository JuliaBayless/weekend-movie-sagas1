import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovies/AddMovie';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '../Header/Header';


function App() {

  
  return (
   
    <div className="App">
       <Router>
      <Header />
      {/* <h1>The Movies Saga!</h1> */}
     
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
