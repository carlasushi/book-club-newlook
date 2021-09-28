import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #ECEDE8;
  font-size: 1rem;
  border-top: 2px solid #000;
  padding: 1em 2.5em 2em 2.5em;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    list-style-type: circle;
    padding: 0em 2em;
    line-height: 1.9;
  }

  h1 {
    font-family: "Monoton", cursive;
    font-size: 2.5rem;
    font-weight: lighter;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    h1{ 
      font-size: 2rem;
    }
  }
`;
