import { styled } from "styled-components";
import { Container } from "../../../../components/Container";
import { Card } from "../../../../components/Card";

export const PostContentContainer = styled(Container)`
  padding: ${(props) => props.theme.functions.convert.pxToRem(40)} ${(props) => props.theme.functions.convert.pxToRem(32)};
  
    p {
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: 1rem;
    line-height: 160%;
    a {
      display: block;
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

export const Code = styled(Card)`
  font-family: ${props => props.theme.fonts.firaCode};
  font-size: 1rem;
  line-height: 160%;
  color: #D5DCE3;
  .variable {
    color: #80ABD6;
  }
  .value {
    color: #6AD445;
  }
  .comment {
    color: #4F6173;
  }
`;
