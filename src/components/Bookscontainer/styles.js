import styled from "styled-components";

export const Container = styled.div`
  background-color: #E0e2db;
  padding: 10em 2.5em;

  // preventing scroll in main container when side panel opened
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ?'hidden':'scroll' )}; 
  position: ${({$isPanelOpen}) => ($isPanelOpen ?'fixed':'unset' )}; 
  top: ${({$isPanelOpen, $top}) => ($isPanelOpen ?`-${$top}px`: 0 )};

  @media (max-width: 800px) {
    padding: 7.125em 1.25em;
    width: 100%;
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

