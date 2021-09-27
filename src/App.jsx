import React, { useState, useEffect } from "react";
import BooksContainer from "./components/Bookscontainer";
import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailPanel from "./components/DetailPanel";
import { Transition } from "react-transition-group";

const App = () => {
  const [books, setBooks] = useState([]); // start w an empty array
  // console.log("component rendering now ------- ");
  const [selectedBook, setSelectedBook] = useState(null); //default to unselected(null)
  // prep for animation of side detailPanel
  const[showPanel, setShowPanel] = useState(false);

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
    setShowPanel(true); // from initial false
  };

  // console.log(selectedBook); // checking click event

  const closePanel = () => {
    setShowPanel(false)
    // setSelectedBook(null); // remove this to avoid bad animation effect.
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} isPanelOpen={showPanel}/> {/* isPanelOpen={selectedBook !== null} updated to isPanelOpen={showPanel} bc of animation */}
      <Transition in={showPanel} timeout={300}>
        {/* updated with render props  ** {selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel} />}{" "}select a book if true, then pass the selectedBook through the panel */}
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}  
      </Transition>
      <Footer />
    </>
  );
};

export default App;
