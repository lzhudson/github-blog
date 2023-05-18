import { styled } from "styled-components";
import cover from '../../assets/cover.png';


export const HeaderContainer = styled.header`
  background: url(${cover}) no-repeat center/cover;
  height: 296px;
  display: flex;
  justify-content: center;
  h1 {
    font-family: ${props => props.theme.fonts.coda};
    text-transform: uppercase;
    color: ${props => props.theme.colors.blue};
    font-weight: 400;
    font-size: ${props => props.theme.functions.convert.pxToRem(24)};
  }
  .logo-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${props => props.theme.functions.convert.pxToRem(20)};
    margin-top: ${props => props.theme.functions.convert.pxToRem(64)};
  }
`