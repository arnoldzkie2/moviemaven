import React from "react";

const Modal = ({ selectedMovie, setModal, addFavourites }) => {
  const handleModal = () => {
    setModal(false);
  };
  return (
    <div className="modal">
      <div className="modal-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
          alt={`This image came from ${selectedMovie.title}`}
        />
        <div className="info">
          <p className="title">{selectedMovie.title}</p>
          <p className="date">Release Date: {selectedMovie.release_date}</p>
          <p className="vote">Votes: {selectedMovie.vote_count}</p>
          <p className="description">{selectedMovie.overview}</p>
          <div className="modal-option">
            <a
              href={`https://www.bilibili.tv/en/search-result?q=${selectedMovie.title}`}
              target="_blank"
            >
              Watch
            </a>
            <button onClick={handleModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
