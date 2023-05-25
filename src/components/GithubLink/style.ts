import { styled } from "styled-components";

export const GithubLinkContainer = styled.a`
  display: inline-flex;
  gap: 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blue};
  align-items: center;
  text-decoration: none;
  position: relative;
  font-weight: 700;
  &::after {
    content: "";
    height: 1px;
    background-color: ${(props) => props.theme.colors.blue};
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    transition: all 0.2s ease-in;
  }
  &:hover::after {
    width: 100%;
  }
  svg {
    width: 12px;
  }
`;
