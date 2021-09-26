import React from 'react'
import {Panel, P, Em, Close, CloseWrapper} from './styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel}) => (
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

)

export default DetailPanel