import React from "react";
import { useLocation } from "react-router-dom";
import "./Trailer.css";

function Trailer() {
  const { state } = useLocation();
  const movie = state?.movie;

  console.log(movie.trailerKey);

  return (
    <div>
      {movie && (
        <>
          <h1 className="movie-title">{movie.title}</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              className="trailer"
              src={`https://www.youtube.com/embed/${movie.trailerKey}`}
              title={movie.title}
              allowFullScreen
              style={{
                width: "560px",
                height: "315px",
                border: "none",
                margin: "20px",
              }}
            />
          </div>

          <p
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
              paddingTop: "20px",
            }}
          >
            <strong>Overview: </strong> {movie.overview}
          </p>
        </>
      )}
    </div>
  );
}

export default Trailer;
