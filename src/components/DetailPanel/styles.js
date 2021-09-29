import styled from "styled-components";
import {Pill} from '../../styles.js'


export const Panel = styled.article`
    background-color: #ECEDE8;
    border-left: 2px solid #000;
    
    // height: 90%;
    height: calc(100vh - 13.125em); // my header is 13.125em
    width: 41.25em;
    position: fixed;
    z-index: 2;

    // animation 41.25em is the width of the entire panel
    right: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100%')};
    bottom: 0;
    transition: 300ms: // smoother animation

    box-sizing: border-box;
    padding: 2.5em 7.5em 3.75em 2.5em;
    overflow: scroll; // independent from the rest of the page
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: initial;

    @media (max-width: 800px) {
        border-left: none;
        padding: 3.3em 5.375em 1.25em 1.25em;
        width: 100vw;
        height: calc(100vh - 11.2em);
        // bottom: 0; only sliding vertically from bottom 
        // adapting to animation
        bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100%')};
        right: unset;
        z-index: 3; // above wrapper 
        }
    }

    @media (max-width: 600px) {
        border-left: none;
        margin-right: 1em;
        padding: .8em .9em .5em .9em;
        width: 100vw;
        height: calc(100vh - 7.9em);
        // adapting to animation
        bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100%')};
        right: unset;
        z-index: 3;
    }
`;

export const P = styled.p`
    font-size: 1re;
    line-height:1.6;
    margin: 1.87em 0 0 ;
    @media (max-width: 800px) {
        margin: 1.87em 1em 1em;
    }
`

export const Em = styled.em`
    font-style: italic;
`

// circle around x for closing 
// inheriting padding from pill component
export const CloseWrapper = styled(Pill)`
    display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};
    align-items:center;
    justify-content: center;
    // positional properties
    overflow: hidden;
    cursor: pointer;
    top: 7.5em;
    right: 2.5em;
    position: fixed;
    z-index: 4;
    @media (max-width: 880px) {
        top:unset;
        bottom: 1.25em;
        right: 1.25em;
    }
`
// blurry background, clickable, closes DetailPanel

export const BG = styled.div`
    background: rgba(136, 150, 150, .8 ); 
    cursor: pointer;
    // cover all view port
    position: fixed;
    height: 100vh;
    width: 100vw;
    top:0;
    z-index: 1; // above book list yet below header and detail panel.
    // animation 
    opacity: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 1 : 0)};
    pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto')};
    transition: 300ms;
`