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

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const BookClubInfo = styled.div`
  font-size: 1.25rem;
  text-align: justify;
  margin: 0 0 0.5em 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  line-height: 1.8;

  @media (max-width: 800px) {
    font-size: 1rem;
    line-height: 1.2;
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
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1.25em;
  }
`;
