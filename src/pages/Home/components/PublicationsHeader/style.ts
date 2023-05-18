import { styled } from "styled-components";

export const PublicationsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${props => props.theme.functions.convert.pxToRem(72)};

  h2 {
    font-size: ${props => props.theme.functions.convert.pxToRem(18)};
    color: ${props => props.theme.colors["base-subtitle"]};
    font-weight: 700;
  }

  span {
    font-size: ${props => props.theme.functions.convert.pxToRem(14)};
    color: ${props => props.theme.colors["base-span"]};
    font-weight: 400;
  }
`