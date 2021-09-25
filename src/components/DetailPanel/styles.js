import styled from "styled-components";

export const Panel = styled.article`
    background-color: #b38b7f;
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
        height: 86%;
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