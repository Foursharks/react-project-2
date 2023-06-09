import logo from './logo.svg';
//components always need to be uppercase
import Header from './components/Header'; 
import { useEffect, useState } from 'react';
//this is only brought in to render in app, not to get data
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
import axios from "axios"; 
import './App.css';

function App() {
  //this is creating variables some of which will store array information coming from the api
  //must be on a higher level than the components that have use of them

  //watchlist is what will contain movies that have been added via 'add' button
  const [watchlist, setWatchlist] = useState([]); 

  //this gives a set of all the movies from the api, with add button to add to watch list
  const [movielist, setMovieList] = useState([]); 
  //page is the page that you are on, setPage will set it to whatever next or previous
  const [page, setPage] = useState(1); 

//where is movie coming from? What is happening here? 
  const addMovie =(movie) => {
    console.log(movie)
    console.log(watchlist)
    //set movie list is going to set the movie list when a new movie is added?
  setWatchlist([...watchlist, movie]);
  console.log(watchlist)

  }

  const removeMovie = (movie) => {
    const newState = watchlist.filter((mov) => {return mov !==movie})
    
    setWatchlist(newState); 
  }
  const getData = () => {
    //this api call basically just returns a page full of movie info
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      setMovieList(res.data.results); //I think this is saving what comes back in the api response as the MovieList array. 
    })
  }
  useEffect(() => {
    //run getData and return the setMovieList function which passes in the api results
    getData(); 
  }, [page])

  return (
    <div className="App">
      <Header/>
      <main>
    <MovieScreen
    addMovie={addMovie}
    movielist={movielist}
    watchlist={watchlist}
    page={page}
    setPage={setPage}
    removeMovie ={removeMovie}
    />
    <Watchlist removeMovie ={removeMovie} watchlist={watchlist}/>
      </main>
    </div>
  );
}

export default App;
