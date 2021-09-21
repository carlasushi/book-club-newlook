import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://bookclub-books-api.herokuapp.com/books")
        .then((response) => {
          console.log(`response: `, response);
          return response.json();
        })
        .then((books) => {
          console.log(`json-ified response: `, books);
          return setBooks(books);
        });
    };
    fetchData();
  }, []);

  console.log(`books array: `, books);

  return <div>Getting started</div>;
};

export default App;
