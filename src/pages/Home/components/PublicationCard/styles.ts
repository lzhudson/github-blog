import { styled } from "styled-components";

export const PublicationCardContainer = styled.article`
  background: ${(props) => props.theme.colors["base-post"]};
  border-radius: 10px;
  padding: 2rem;
  min-height: 260px;
  max-height: 260px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    h3 {
      font-size: 1.25rem;
      color: ${props => props.theme.colors["base-title"]};
      max-width: 283px;
      line-height: 160%;
    }
    time {
      font-size: 0.875rem;
      color: ${props => props.theme.colors["base-span"]};
    }
  }
  p {
    margin-top: 1.25rem;
    color: ${props => props.theme.colors["base-text"]};
    line-height: 160%;
  }
  a {
    text-decoration: none;
  }
`;
