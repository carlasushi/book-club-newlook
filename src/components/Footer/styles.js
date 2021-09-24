import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: #f3ecf2;
  background: #5c7f94;
  font-size: 1rem;
  border-top: 2px solid #000;
  padding: 1em 2.5em 2em 2.5em;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    list-style-type: circle;
    padding: 0em 2em;
  }

  h1 {
    font-family: "Monoton", cursive;
    font-size: 2.5rem;
    font-weight: lighter;
  }

  @media (max-width: 800px) {
    font-size: 0.75rem;
  }
  a:link {
    color: #f3ecf2;
  }
  a:visited {
    color: purple;
  }
  a:hover {
    color: #d17375;
  }
  a:active {
    color: blue;
  }
`;
