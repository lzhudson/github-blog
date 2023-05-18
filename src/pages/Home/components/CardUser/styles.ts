import { styled } from "styled-components";

export const CardUserContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors["base-profile"]};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -85px;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.functions.convert.pxToRem(32)};
`

export const CardUserImageContainer = styled.div`
  border-radius: 8px;
  height: 148px;
  img {
    max-width: 148px;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const CardUserInfoContainer = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 0.5rem;
    h1 {
      font-size: ${props => props.theme.functions.convert.pxToRem(24)};
      color: ${props => props.theme.colors["base-title"]};
      line-height: 130%;
    }
    a {
      display: inline-flex;
      gap: 0.5rem;
      text-transform: uppercase;
      color: ${props => props.theme.colors.blue};
      align-items: center;
      text-decoration: none;
      position: relative;
      font-weight: 700;
      &::after {
        content: "";
        height: 1px;
        background-color: ${props => props.theme.colors.blue};
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
    }
  }
  p {
    margin-top: 0.5rem;
    color: ${props => props.theme.colors["base-text"]};
  }
`

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
      color: ${props => props.theme.colors["base-label"]};
    }
    span {
      font-size: 1rem;
      color: ${props => props.theme.colors["base-subtitle"]};
    }
  }
`