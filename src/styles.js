import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    body {
        color: #121615;
        font-family: 'Roboto Mono', monospace;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizedLegibility;
    }
    a:link {
        color: #5F7470;
        }
        a:visited {
            color: #889696;
        }
        a:hover {
            color: #d17375;
        }
        a:active {
            color: blue;
        }
`
export const Pill =styled.div`
    // background: #E0E2db;
    border: 2px solid #000;
    border-radius: 30px;
    height: 1.25em;
    width: 1.25em;
    padding: .5em;
    display: flex;
`

// creating an x shape for closing
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
        width: .225em;
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