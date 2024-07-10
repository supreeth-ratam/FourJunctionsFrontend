import React from "react";
import { useNavigate } from "react-router-dom";
function Card({ movie }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/editmovie/${movie._id}`)}>
      <img
        src={
          movie.posterPath ? movie.posterPath : "https://placehold.co/100x120"
        }
        height={120}
        alt=""
      />
      <div className="card--content">
        <h3>{movie.name}</h3>
        <p>{movie.yearOfRelease}</p>
        <p>
          Producer:
          <span className="regular-text">{movie.producer?.name}</span>
        </p>
        <p>
          Actors:
          <span className="regular-text">
            {movie.actors?.map((item, id) =>
              id === movie.actors.length - 1 ? `${item.name}` : `${item.name}, `
            )}
          </span>
        </p>
      </div>
      <div className="move-to-end">
        <img src="/imdb-logo.png" height={30} alt="" />
        <p>{movie.rating}</p>
      </div>
    </div>
  );
}

export default Card;
