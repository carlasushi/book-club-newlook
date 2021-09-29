import styled from 'styled-components'
import {Pill} from '../../styles.js'
import {ReactComponent as MagnifyingIcon} from "../../assets/search.svg"

export const SearchContainer = styled(Pill)`
    width: ${({$showOnDesktop}) => ($showOnDesktop ? "26.25em" : "1.25em")};
    transition: 300ms;

    @media(max-width: 880px) {
        width: 85%; // always visible
    }

    input, 
    button {
        display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')}

        @media (max-width: 880px) {
            display: block;
        }
    }
`

export const Input = styled.input`
    font-size: 1.125rem;
    flex-grow:1;
    background: inherit;
    border: none;
    padding: .375em;
}
`

export const Icon = styled(MagnifyingIcon)`
    width:1.25em;
    cursor: pointer;
` 

export const Wrapper = styled.div`
    @media(max-width: 800px){
        background: #D2D4C8;
        border-top: 2px solid #000;
        display:flex;
        align-items: center;
        justify-content: center;
        height: 5.333em;
        width: 100vw;
        //left bottom corner
        left: 0;
        bottom:0;
        position: fixed;
        z-index:1; //above book list
    }
`