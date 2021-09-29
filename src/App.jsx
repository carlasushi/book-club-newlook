import React, { useState, useEffect } from "react";
import BooksContainer from "./components/Bookscontainer";
import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search"
import DetailPanel from "./components/DetailPanel";
import { Transition } from "react-transition-group";

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bookclub-books-api.herokuapp.com/books"
        );
        // https://cors-anywhere.herokuapp.com/
        const books = await response.json();
        setBooks(books); // update array if response ok
        setFilteredBooks(books); // show all books from start 
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book); // from initial null
    setShowPanel(true); // from initial false
  };

  const closePanel = () => {
    setShowPanel(false)
    // setSelectedBook(null); // remove this to avoid bad animation effect.
  }

//search function falsie value return books array, else return filter function
  const filterBooks = (searchTerm) => {
      const stringSearch = (bookAttribute, searchTerm) =>
        bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

      if (!searchTerm) {
        setFilteredBooks(books)
      } else {
        setFilteredBooks(
          books.filter(
            (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
          )
        )
      }
  }

  // console.log("search test null")
  // console.log(filterBooks(null))
  // console.log("search test little")
  // console.log(filterBooks('little'))
  // console.log(filterBooks('lyons'))

  // conditionally render the tittle of the book that has been filtered
  // when !== true the booklist has been entirely filtered by book.title
  const hasFiltered = filteredBooks.length !== books.length
  
  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer 
        books={filteredBooks} 
        pickBook={pickBook} 
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : 'All books'}
      /> {/* isPanelOpen={selectedBook !== null} updated to isPanelOpen={showPanel} bc of animation */}

      <Transition in={showPanel} timeout={300}>
        {/* updated with render props  ** {selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel} />}select a book if true, then pass the selectedBook through the panel */}
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}  
      </Transition>

      <Footer />
    </>
  );
};

export default App;
