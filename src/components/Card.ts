import { styled } from "styled-components";

export const Card = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors["base-profile"]};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -85px;
  padding: 32px 40px;
`