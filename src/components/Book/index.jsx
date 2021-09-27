import React from 'react'
import {Container, Cover, Title, Author, SelectedBy, ReadBy} from './styles'
// isLarge means detail panel side view
const Book = ({book, pickBook, isLarge}) => (
    <Container $isLarge={isLarge} onClick={() => pickBook && pickBook(book)}>
        <Cover $isLarge={isLarge}  alt={`Book cover for ${book.title} by ${book.author}`} src={book.image}/>
        <figcaption>
            <Title $isLarge={isLarge}>{book.title}</Title>
            <Author>{book.author}</Author>
            <SelectedBy> Suggested by {book.selected_by}</SelectedBy>
            <ReadBy>{book.month_read}, {book.year_read} </ReadBy>
        </figcaption>
    </Container>
)

export default Book