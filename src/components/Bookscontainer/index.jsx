import React, {useRef, useEffect, useState} from "react";
import { debounce } from "lodash-es";
import { Container, H2, BookList } from "./styles";
import Book from "../Book";

const BooksContainer = ({books, pickBook, isPanelOpen, title, noTitle}) => {

  // setting book list's scrolling effect 
  const [scroll, setScroll] = useState(0) // storing the y coordinate scroll position as a coordinate in browser
  const prevPanelState = useRef(false) // gets triggered when isOpenPanel changes
  
  useEffect(() => {
    const handleScroll = debounce(() => { 
      setScroll(window.scrollY)
    }, 100) //debounce delays the setScroll function here by 100 milliseconds

    if(!isPanelOpen) {
      window.addEventListener('scroll', handleScroll) // track scroll position
    }
    return() => {
      window.removeEventListener('scroll', handleScroll)//cleaning up all scroll event handlers before useEffect function gets rerun
    }
  }, [isPanelOpen]) //useEffect will only run when isPanelOpen's value changes

  //console.log(scroll) // tracking "y" coordinates

  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0,scroll)
    }
    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])
  
  return (
      <Container $isPanelOpen={isPanelOpen} $top={scroll}> {/* links to book container's style */}
        <H2> 
            <a target="_blank" rel="noreferrer" href="https://lu.ma/carla-paloma">
              Link to all Luma events
            </a>
        </H2>
        <H2>
            {title}  {/* title equals search results or array defined in app.jsx*/}
        </H2>  
        <H2>
           {noTitle}
        </H2>
        <BookList>
          {books.slice().reverse().map((book) => (
            <Book key={book.id} book={book} pickBook={pickBook} />
          ))}
        </BookList>
      </Container>
  )
}
export default BooksContainer;
