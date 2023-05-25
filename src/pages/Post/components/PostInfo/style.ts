import { styled } from "styled-components";
import { Card } from "../../../../components/Card";

export const PostInfoCard = styled(Card)`
  h1 {
    color: ${props => props.theme.colors["base-title"]};
    font-size: ${props => props.theme.functions.convert.pxToRem(24)};
    margin-top: ${props => props.theme.functions.convert.pxToRem(20)};
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const PostInfoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .back-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme.colors.blue};
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    svg {
      color: ${props => props.theme.colors.blue};
    }
  }
`

export const PostInfoDataList = styled.ul`
  margin-top: ${props => props.theme.functions.convert.pxToRem(12)};
  list-style: none;
  display: flex;
  gap: 1.5rem;
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      color: ${(props) => props.theme.colors["base-label"]};
    }
    span, time {
      font-size: 1rem;
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
  }
`