import React from "react";

const Movie = (props) => {
    const FavouritesComponent = props.favorites
  return (
    <div className="movie">
      {props.movieList &&
        props.movieList.map((movie) => (
          <div className="card" key={movie.id} >
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`This image came from ${movie.title}`}
              onClick={() => props.setSelectedmovie(movie)}
            />
            <div className="favor" onClick={() =>props.addFavourites(movie)}>
           <FavouritesComponent />
           </div>
          </div>
        ))}
    </div>
  ); 
};

export default Movie;
