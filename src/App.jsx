import React, { useState, useEffect } from "react";
import BooksContainer from "./components/Bookscontainer";
import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailPanel from "./components/DetailPanel";

const App = () => {
  const [books, setBooks] = useState([]); // start w an empty array
  const [selectedBook, setSelectedBook] = useState(null); //start w null bc unselected
  // console.log("component rendering now ------- ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bookclub-books-api.herokuapp.com/books"
        );
        // console.log(`successful response: `, response);
        // https://cors-anywhere.herokuapp.com/
        const books = await response.json();
        // console.log(`json-ified response after successful response: `, books);
        setBooks(books); // update array if response ok
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  // console.log(`books array: `, books);


  const pickBook = (book) => {
    setSelectedBook(book); // from initial null
  };
  // console.log(selectedBook); // checking click event

  const closePanel = () => {
    setSelectedBook(null);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} isPanelOpen={selectedBook !== null} />
      {selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel} />}{" "}
      {/* select a book if true, then pass the selectedBook through the panel*/}
      <Footer />
    </>
  );
};

export default App;
