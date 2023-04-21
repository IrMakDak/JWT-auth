import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  margin: 0 auto;
  margin-top: 40px;

  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;

  max-width: 1320px;
  height: 48px;
`;
export const StyledLogo = styled.div`
  display: block;
`;
export const StyledNavLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  width: 479px;
  cursor: pointer;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  border: 1px solid #4f46e5;
  border-radius: 10px;

  color: #4f46e5;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  line-height: 24px;

  &:hover {
    transition-duration: 0.3s;
    background: #433bc2;
    color: #fff;
  }
`;
export const StyledLinkText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 340%;
  cursor: pointer;
  &:hover {
    color: #000;
    transition-duration: 0.3s;
  }
`;
export const StyledLogedAccaunt = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-decoration-line: underline;
  white-space: nowrap;

  color: #4f46e5;
  cursor: pointer;
  &::after {
    content: url("https://irmakdak.github.io/JWT-auth/public/images/person.png");
    display: block;
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
`;
export const StyledDropDown = styled.div`
  float: left;
  position: relative;
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  z-index: 0;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  &:hover .drop-content {
    display: block;
  }
  &:hover .drop-menu {
    display: block;
  }
`;
export const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  justify-content: space-between;
  @media (max-width: 576px) {
    padding: 5px 5px;
  }
`;

export const StyledMenu = styled(StyledLogedAccaunt)`
  display: none;
  text-decoration-line: none;
  font-size: 46px;
  &::after {
    content: "";
    display: none;
  }
  @media (max-width: 992px) {
    display: block;
  }
`;
