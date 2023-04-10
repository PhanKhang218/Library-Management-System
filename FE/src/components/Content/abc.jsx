//
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import "./Content.css";
import { animateScroll } from "react-scroll";

const APIURL = "http://localhost:5001/api/books";

function Content() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(500);

  useEffect(() => {
    getBooks(APIURL);
  }, []);

  async function getBooks(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    setBooks(respData);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    animateScroll.scrollToTop(); // Chuyển đến đầu trang với hiệu ứng scroll mượt mà
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    animateScroll.scrollToTop(); // Chuyển đến đầu trang với hiệu ứng scroll mượt mà
  };

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = books
    .map((book) => book.description)
    .join(" ")
    .split(" ")
    .slice(indexOfFirstWord, indexOfLastWord);

  const renderBooks = currentWords
    .join(" ")
    .split("\n\n")
    .map((content, index) => (
      <React.Fragment key={index}>
        <div className="">
          <div className="book-title">{books[0]?.title}</div>
          <div className="book-content">
            <div>{ReactHtmlParser(content)}</div>
          </div>
        </div>
      </React.Fragment>
    ));

  return (
    <div className="bg-container">
      <div id="book">{renderBooks}</div>
      <div className="pagination">
        <button
          className="btn-next"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn-next"
          onClick={handleNextPage}
          disabled={currentWords.length < wordsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Content;
