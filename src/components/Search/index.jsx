import React, {useRef, useState} from "react"; 
import {SearchContainer, Input, Icon, Wrapper} from './styles'
import {Close} from '../../styles'

const Search =({filterBooks}) => {
    const inputEl = useRef(null) // capture text entered in search bar for closing + clearing search bar
    const [showOnDesktop, setShowOnDesktop] = useState(false)

    const handleChange = (event) => {
        filterBooks(event.target.value) // from search typing
    }

    const clearSearch = () => {
        filterBooks('') //  makes hasFiltered evaluate to true, renders full books array. const hasFiltered = filteredBooks.length !== books.length 
        inputEl.current.value = " " //clear search bar
        setShowOnDesktop(false)
    }

    const showSearch = () => {
        setShowOnDesktop(true)     // render search bar upon click event 

    }

    return (
        <Wrapper>
            <SearchContainer $showOnDesktop={showOnDesktop}>
                <Icon onClick={showSearch} />
                <Input ref={inputEl} type="text" name="search" autoComplete="off" onChange={handleChange} />
                <Close onClick={clearSearch}/>
            </SearchContainer>
        </Wrapper>
        )
}
export default Search