import React from 'react'
import {Panel, P, Em, Close, CloseWrapper, BG} from './styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel, state}) => {
    console.log(state)
    return (
        <>
        <BG onClick={closePanel} $state={state}/>
        <Panel $state={state}>
            <CloseWrapper onClick={closePanel} $state={state}>
                <Close />
            </CloseWrapper>

            {/* only render if there is a valid book component */}
            {book && (
                <>
                    <Book book={book} isLarge={true}/>
                    <P>{book.description}</P>
                    <p>
                        <Em>Published in {book.published}. </Em>
                    </p>
                </>
            )}   
        </Panel>
    </>
    )
}

export default DetailPanel