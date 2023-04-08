import React, { useState, useEffect } from "react";
const APIURL = "http://localhost:5001/api/books";
import "./Main.css";
function Main(props) {
  const [books, setBook] = useState([]);

  useEffect(() => {
    getBook(APIURL);
  }, []);

  async function getBook(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    setBook(respData);
  }
  return (
    <div>
      <form id="search-form">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div id="main">
        {books.map((book) => (
          <div key={book.id} className="movie">
            <img alt={book.image} src={book.image} />
            <div className="movie-info">
              <h3>{book.title}</h3>
            </div>
            <div className="overview">
              <h3>Overview:</h3>
              <p>{book.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
