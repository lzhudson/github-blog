import styled from "styled-components";

export const LoadingMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;

  h2 {
    color: ${props => props.theme.colors["base-text"]};
  }
`