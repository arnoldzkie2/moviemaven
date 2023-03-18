import React, { useEffect, useState } from "react";

export const Favourites = ({
  movieList,
  favorites,
  removeFav,
  setSelectedmovie,
}) => {
  const [favBtn, setfavBtn] = useState("Remove");
  const [option, setOption] = useState("View");
  const [favShaodw, setFavShaodow] = useState("");

  const handleFav = (movie) => {
    if (favBtn === "Remove") {
      setSelectedmovie(movie);
    } else {
      removeFav(movie);
    }
  };
  const toggleFav = () => {
    if (favBtn === "Remove") {
      setfavBtn("Save");
      setOption("Delete");
      setFavBtnStyle("green");
      setFavShaodow("red");
    } else {
      setfavBtn("Remove");
      setOption("View");
      setFavBtnStyle("red");
      setFavShaodow("");
    }
  };

  useEffect(() => {
    if (movieList.length === 0) {
      setfavBtn("Remove");
      setOption("View");
      setFavBtnStyle("red");
      setFavShaodow("");
    }
  }, [movieList]);
  const [favBtnStyle, setFavBtnStyle] = useState("red");

  const favStyle = {
    color: "white",
    backgroundColor: favBtnStyle,
    width: "80px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.3s",
    borderRadius: "5px",
  };

  const favRemove = {
    boxShadow: `3px 3px 20px ${favShaodw}`,
  };
  return (
    <div className="favorite-card">
      {movieList.length > 0 ? (
        <div className="fav-side-text">
          <div className="fav-text">Favorites</div>
          <div className="option">Click to {option}</div>
          <p style={favStyle} onClick={toggleFav} className="toggleFav">
            {favBtn}
          </p>
        </div>
      ) : (
        <div className="no-fav">No Favorites</div>
      )}
      <div className="fav-overflow">
        {favorites &&
          movieList.map((movie) => (
            <div
              className="fav-card"
              key={movie.id}
              onClick={() => handleFav(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                key={movie.id}
                onClick={() => handleFav(movie)}
                style={favRemove}
              />
              <div className="fav-title">{movie.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
export const PopFav = () => {
  return (
    <div className="pop-container">
      <div className="pop-fav">
        <p>Added to Favorites</p>
      </div>
    </div>
  );
};

export const AddFavourites = () => {
  return (
    <>
      <div className="favor">
        <p>Add to favorites</p>
        <i className="fa-solid fa-heart"></i>
      </div>
    </>
  );
};

export const RemoveFavourites = () => {
  return (
    <div className="favor">
      <p>Remove from favorites</p>
      <i className="fa-solid fa-trash"></i>
    </div>
  );
};
