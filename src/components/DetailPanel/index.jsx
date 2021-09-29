import React, {useEffect, useRef} from 'react'
import {Panel, P, Em, CloseWrapper, BG} from './styles'
import {Close} from '../../styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel, state}) => {
    // resetting scroll position of book containers at the top.
    const panelEl = useRef(null)
    const prevBook = useRef(null)
    
    // setting panel El's scroll to zero
    useEffect(() => {
        if (prevBook.current !== book) {
            panelEl.current.scrollTop = 0
        }
    
        prevBook.current = book // being displayed in detail panel
    }, [book, prevBook])  // useEffect only re-run if book + preBook values change

    // console.log(state)
    
    return (
        <>
            <BG onClick={closePanel} $state={state} />
            <Panel $state={state} ref={panelEl}>
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