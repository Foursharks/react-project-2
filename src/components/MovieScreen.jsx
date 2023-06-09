import React from "react";
import MovieCard from "./MovieCard";


//I need to destructure movie list from props.movielist by using {} (or can say props.movielist.map)
const MovieScreen = ({addMovie, movielist, removeMovie, watchlist, page, setPage}) => {

  const decrement = () => setPage(page - 1);
  const increment = () => setPage(page + 1);

  const movieDisplay = movielist.map((movie, index) => {
      
      return <MovieCard movie={movie} addMovie={addMovie} removeMovie= {removeMovie}  watchlist={watchlist}/>
  }
  )
  
  return (
      <div className="page">
        <h1>Drew's movie theatre</h1>
        <h3>Add a movie to your watchlist</h3>
        <div className="movie-container">{movieDisplay}</div>
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
        
      </div>
    );


}

  export default MovieScreen; 