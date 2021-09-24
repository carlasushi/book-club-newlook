import React from 'react'
import {Container, Cover, Title, Author, SelectedBy, ReadBy} from './styles'

const Book = ({book, pickBook}) => (
    <Container onClick={()=> pickBook(book)}>
        <Cover alt={`Book cover for ${book.title} by ${book.author}`} src={book.image}/>
        <figcaption>
            <Title>{book.title}</Title>
            <Author>{book.author}</Author>
            <SelectedBy> Suggested by {book.selected_by}</SelectedBy>
            <ReadBy>{book.month_read}, {book.year_read} </ReadBy>
        </figcaption>
    </Container>
)

export default Book