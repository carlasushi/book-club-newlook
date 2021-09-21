import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3ecf2;
  padding: 10em 2.5em;
  overflow: scroll;

  @media (max-width: 800px) {
    padding: 7.125em 1.25em;
  }
`;

export const H2 = styled.h2`
  font-size: 2.625rem;
  margin: 0 0 0.5em 0;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2.5em;
  grid-row-gap: 7.5em;
  margin-top: 2.5em;
  max-width: 75em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3.75em;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.25em;
  }
`;
