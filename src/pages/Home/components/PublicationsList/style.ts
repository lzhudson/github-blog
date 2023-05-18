import { styled } from "styled-components";

export const PublicationsListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 3rem;
  list-style: none;
  margin-bottom: ${props => props.theme.functions.convert.pxToRem(234)};
`