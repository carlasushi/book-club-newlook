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
