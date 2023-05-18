import { styled } from "styled-components";

export const SearchFormContainer = styled.form``

export const SearchInput = styled.input`
  background: ${props => props.theme.colors["base-input"]};
  border: 1px solid ${props => props.theme.colors["base-border"]};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  width: 100%;
  margin-top: 0.75rem;
  outline: 0;
  color: ${props => props.theme.colors["base-text"]};
  &::placeholder {
    color: ${props => props.theme.colors["base-label"]};
  }
  &:focus {
    border: 1px solid ${props => props.theme.colors.blue};
  }
`