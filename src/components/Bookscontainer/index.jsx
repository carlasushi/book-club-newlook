import React from "react";
import { Container, H2, BookList } from "./styles";
import Book from "../Book";

const BooksContainer = ({books, pickBook,isPanelOpen }) => (
  <Container $isPanelOpen={isPanelOpen}> {/* links to bookcontainer's style */}
    <H2>This is a collection of books we have chosen for our online book club.</H2>
    <H2> Save the date! HERE </H2>

    <BookList>
      {books.slice().reverse().map((book) => (
        <Book key={book.id} book={book} pickBook={pickBook} />
      ))}
    </BookList>
  </Container>
);
export default BooksContainer;
