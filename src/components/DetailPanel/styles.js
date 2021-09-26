import styled from "styled-components";

export const Panel = styled.article`
    background-color: #F2E8B2;
    border-left: 2px solid #000;
    
    height: 90%;
    width: 41.25em;

    position: fixed;
    z-index: 2;
    right: 0;
    bottom: 0;

    box-sizing: border-box;
    padding: 2.5em 7.5em 3.75em 2.5em;

    overflow: scroll; // independent from the rest of the page

    @media (max-width: 880px) {
        border-left: none;
        padding: 12% 20%;
        width: 100vw;
        height: 95%;
        bottom: 0; // only sliding vertically from bottom
        right: unset;
    }

    @media (max-width: 600px) {
        border-left: none;
        margin: 0 auto;
        padding: .8em .9em .5em .9em;
        width: 100vw;
        height: 89.3%;
        bottom: 0; // only sliding vertically from bottom
        right: unset;
    }
`;

export const P = styled.p`
    font-size: 1re;
    line-height:1.6;
    margin: 1.87em 0 0 ;
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
    display: flex;
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
`