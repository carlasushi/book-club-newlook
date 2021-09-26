import React from 'react'
import {Panel, P, Em, Close, CloseWrapper, BG} from './styles'
import Book from '../Book'
import BooksContainer from '../Bookscontainer'

const DetailPanel = ({book, closePanel}) => (
    <>
        <BG onClick={closePanel}/>
        <Panel>
            <CloseWrapper onClick={closePanel}>
                <Close />
            </CloseWrapper>
            <Book book={book} isLarge={true}/>
            {/* <figure book={book}>
                <img alt=" " src={book.image}/>
                <h3>{book.title}</h3>
                <h4>by {book.author}</h4>
            </figure> */}
            <P>{book.description}</P>
            <p>
                <Em>Published in {book.published}. </Em>
            </p>
        </Panel>
    </>
)

export default DetailPanel