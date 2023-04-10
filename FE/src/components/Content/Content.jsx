import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import "./Content.css";
import { animateScroll } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const APIURL = "http://localhost:5001/api/books";

function Content() {
  const [book, setBook] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(500);

  const location = useLocation();
  const bookId = location.state.bookId;
  const navigate = useNavigate();

  console.log(bookId);
  useEffect(() => {
    getBook(APIURL + `/${bookId}`);
  }, [bookId]);

  async function getBook(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    setBook(respData);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    animateScroll.scrollToTop();
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    animateScroll.scrollToTop();
  };

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = book.description
    ?.split(" ")
    .slice(indexOfFirstWord, indexOfLastWord);

  const renderBook = book.description ? (
    <React.Fragment>
      <div className="">
        <div className="book-title">{book.title}</div>
        <div className="book-content">
          {currentWords && (
            <div>
              {ReactHtmlParser(currentWords.join(" ").replaceAll("\\n", "\n"))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  ) : (
    <div>Loading...</div>
  );

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <div className="bg-container">
      <div id="book">{renderBook}</div>
      <div className="pagination">
        <button
          className="btn-next"
          onClick={handlePrevPage}
          disabled={currentPage === 1 || !book.description}
        >
          Previous
        </button>
        <button
          className="btn-next"
          onClick={handleNextPage}
          disabled={
            !book.description ||
            currentWords.length < wordsPerPage ||
            currentWords.length === book.description.split(" ").length
          }
        >
          Next
        </button>
        <button className="btn-back" onClick={() => handleClick()}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Content;
