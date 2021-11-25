import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

export const Logo = styled(LogoSVG)`
  height: 4.5em;
  width: 19.9em;
  display: block;

  @media (max-width: 880px) {
    height: 4em;
    width: 19.3em;
  }
`;

export const HeaderContainer = styled.header`
  background: #D2D4C8;
  border-bottom: 2px solid #000;
  padding: 1.25em 2.5em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: 3;

  @media (max-width: 880px) {
    padding: 10rem;
    max-width: 20rem;
  }
`;
