import React, { useState, useEffect } from "react";
import "./Main.css";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Main() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    setMovies(respData.results);
  }

  function handleSearch(e) {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);

      setSearchTerm("");
    }
  }

  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <div>
      <form id="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div id="main">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img src={IMGPATH + movie.poster_path} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span className={getClassByRate(movie.vote_average)}>
                {movie.vote_average}
              </span>
            </div>
            <div className="overview">
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
