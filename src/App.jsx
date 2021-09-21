import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

const App = () => {
  const [books, setBooks] = useState([]);
  console.log("component rendering now ------- ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bookclub-books-api.herokuapp.com/books"
        );
        console.log(`successful response: `, response);

        const books = await response.json();
        console.log(`json-ified response after successful response: `, books);
        setBooks(books); // update array if response ok
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  console.log(`books array: `, books);

  return <div>Getting started</div>;
};

export default App;
