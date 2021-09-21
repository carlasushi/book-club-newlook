import styled from "styled-components";

export const Container = styled.figure`
  cursor: pointer;
  margin: 0;
`;

export const Cover = styled.img`
  filter: grayscale(100%);
  border: 2px solid #0000;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.75rem;
  margin: 0 0 0.625em 0;
  line-height: 1.3;
`;

export const Author = styled.h4`
  font-size: 1rem;
  margin: 0;
  line-height: 1.6;
  font-family: "Libre Baskerville", serif;
`;
