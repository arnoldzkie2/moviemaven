import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import { PopFav } from "./components/Favorites";
import { api_key, api_url } from "./Api";
import Movie from "./components/Movie";
import {
  AddFavourites,
  RemoveFavourites,
  Favourites,
} from "./components/Favorites";
import Modal from "./components/Modal";
import Skeleton from "./components/Skeleton";

function App() {
  const [popFav, setPopFav] = useState(false),
  [movie, setMovie] = useState(null),
  [search, setSearch] = useState(""),
  [modal, setModal] = useState(false)
  const [selectedMovie, setSelectedmovie] = useState(null);
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem("favourites")) || []
  );

  useEffect(() => {
    const fetchMovie = async () => {
      if (search) {
        const response = await fetch(
          `${api_url}/search/movie?api_key=${api_key}&query=${search}`
        );
        const data = await response.json();
        setMovie(data.results);
      }
    };
    fetchMovie();
  }, [search]);

  useEffect(() => {
    if (search === "") {
      setMovie(null);
      setSearch("");
    }
  }, [search]);

  
  const addFav = (movie) => {
    const isAlreadyFavourite = favourites.some(
      (favourite) => favourite.id === movie.id
      );
      if (!isAlreadyFavourite) {
        const newFavouritesList = [...favourites, movie];
        setFavourites(newFavouritesList);
        localStorage.setItem("favourites", JSON.stringify(newFavouritesList));
        setPopFav(true)
        setTimeout(() => {
          setPopFav(false)
        },1500)
      } else {
        alert("Already added in favorites");
      }
    };

    const removeFav = (movie) => {
    const newFavouritesList = favourites.filter(
      (favorite) => favorite.id != movie.id
      );
      setFavourites(newFavouritesList);
      localStorage.setItem("favourites", JSON.stringify(newFavouritesList));
  };

  const handleModal = (movie) => {
    setSelectedmovie(movie);
    setModal(true);
  };
  
  const RenderMovie = () => {
    if (search === "" && movie === null) {
      return <div className="movie-page">Search for Movie. </div>;
    } else if (search && movie === null) {
      return <div><Skeleton /></div>;
    } else if (search && movie.length === 0) {
      return <div className="movie-page">No movie found.</div>;
    } else if (search && movie) {
      return (
        <Movie
        movieList={movie}
        favorites={AddFavourites}
        addFavourites={addFav}
        setSelectedmovie={handleModal}
        setPopFav={setPopFav}
        />
      );
    }
  };
  
  const searchMovie = (searchData) => {
    setSearch(searchData);
  };
  return (
    <div className="container">
      {popFav && <PopFav />}
      <Search search={searchMovie}/>
      <Favourites
        movieList={favourites}
        favorites={RemoveFavourites}
        removeFav={removeFav}
        setSelectedmovie={handleModal}
      />
      <RenderMovie />
      {modal && <Modal selectedMovie={selectedMovie} setModal={setModal} addFavourites={addFav}/>}
    </div>
  );
}

export default App;
