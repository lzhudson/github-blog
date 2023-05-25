import { styled } from "styled-components";
import { Card } from "../../../../components/Card";

export const CardUserContainer = styled(Card)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.functions.convert.pxToRem(32)};
  margin-top: -85px;
`;
export const CardUserImageContainer = styled.div`
  border-radius: 8px;
  height: 148px;
  img {
    max-width: 148px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const CardUserInfoContainer = styled.div`
  width: 100%;
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 0.5rem;
    h1 {
      font-size: ${(props) => props.theme.functions.convert.pxToRem(24)};
      color: ${(props) => props.theme.colors["base-title"]};
      line-height: 130%;
    }
  }
  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const CardUserSocialList = styled.ul`
  margin-top: 1.5rem;
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
    span {
      font-size: 1rem;
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
  }
`;
