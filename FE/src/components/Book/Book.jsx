import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Book.css";

const APIURL = "http://localhost:5001/api/books";
function Main(props) {
  let [users, setUser] = useState({});
  const [books, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("account"));
    setUser({ ...users });
  }, []);
  useEffect(() => {
    getBook(APIURL);
  }, []);

  async function getBook(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    setBook(respData);
  }
  const handleClick = (bookId) => {
    navigate(`/book/book-content/${bookId}`, { state: { bookId } });
  };

  return (
    <div>
      <div id="main">
        {books.map((book) => (
          <div key={book.id} className="movie">
            <img src={book.image} onClick={() => handleClick(book.id)} />
            <div className="movie-info">
              <h3>{book.title}</h3>
            </div>
            <div className="overview" style={{ textAlign: "justify" }}>
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
