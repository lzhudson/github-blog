import { styled } from "styled-components";
import { Container } from "../../../../components/Container";
import { Card } from "../../../../components/Card";

export const PostContentContainer = styled(Container)`
  padding: ${(props) => props.theme.functions.convert.pxToRem(40)} ${(props) => props.theme.functions.convert.pxToRem(32)};
  h1, h2 {
    color: ${(props) => props.theme.colors["base-text"]};
    margin-bottom: 0.5rem;
  }
  ul {
    color: ${(props) => props.theme.colors["base-text"]};
    margin-left: 2rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: 1rem;
    line-height: 160%;
    margin-bottom: 0.5rem;
    a {
      display: block;
      color: ${(props) => props.theme.colors.blue};
    }
  }

  code {
    display: block;
    font-family: ${(props) => props.theme.fonts.firaCode};
    font-size: 1rem;
    line-height: 160%;
    color: #d5dce3;
    background-color: ${(props) => props.theme.colors["base-profile"]};
    width: 100%;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    padding: 1rem;
  }
`;

export const Code = styled(Card)`
  font-family: ${(props) => props.theme.fonts.firaCode};
  font-size: 1rem;
  line-height: 160%;
  color: #d5dce3;
  .variable {
    color: #80abd6;
  }
  .value {
    color: #6ad445;
  }
  .comment {
    color: #4f6173;
  }
`;
