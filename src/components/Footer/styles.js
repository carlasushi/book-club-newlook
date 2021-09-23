import styled from "styled-components";

export const FooterContainer = styled.footer`
    color: #f3ecf2;
    background: #5c7f94;
    border-top: 2px solid #000;
    padding: .25em 2.5em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.3rem;
    margin: 0 0 0.5em 0;

    @media (max-width: 800px) {
        font-size: .75rem;
    }
    a:link {
        color: #f3ecf2;
    }
    a:visited {
        color: yellow;
    }
    a:hover {
        color: #D17375;
    }
    a:active {
        color: blue;
    }
`