import styled from "styled-components";

export const Panel = styled.article`
    background-color: #F2E8B2;
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

    @media (max-width: 800px) {
        border-left: none;
        padding: 40px 86px 20px 20px;
        width: 95vw;
        height: calc(100vh - 10.4em);
        // bottom: 0; only sliding vertically from bottom 
        // adapting to animation
        bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100%')};
        right: unset;
        z-index: 3;
        }
    }

    @media (max-width: 600px) {
        border-left: none;
        margin-right: 1em;
        padding: .8em .9em .5em .9em;
        width: 92vw;
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

export const Close = styled.button`
    background: none;
    border:0;
    cursor: pointer;
    height: 1.5em;
    width: 1.5em;
    padding: 0;
    position: relative;

    &::before,
    &::after {
        background-color: #000;
        content: '';
        height: 1.5em;
        width: .125em;
        position: absolute;
        top:0;
        left:.5625em;
    }

    &::before {
        transform: rotate(45deg);
    }
    &::after {
        transform: rotate(-45deg);
    }
`

export const CloseWrapper = styled.div`
    background: none;
    border: 2px solid #000;
    border-radius: 30px;
    height: 1.25em;
    width: 1.25em;
    padding: .5em;
    display: ${({$state}) => ($state == 'entered' ? 'flex' : 'none')};
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
    background: rgba(144, 185, 143, .5); 
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