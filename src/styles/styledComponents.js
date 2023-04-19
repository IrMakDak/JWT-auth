import styled from "styled-components";

export const StyledHeader = styled.div`
  color: ${(props) => (props.bg === "bg-light" ? "#000" : "#fff")};
  background-color: ${(props) =>
    props.bg === "bg-light" ? "#f8f9fa" : "#0d6efd"};
  padding: 20px;
  margin-bottom: ${(props) => (props.marginBottom === "0px" ? "0px" : "20px")};
  margin-top: ${(props) => (props.marginTop === "0px" ? "0px" : "20px")};
  font-size: 22px;
  text-align: left;
  font-weight: lighter;
`;

export const StyledNav = styled.nav`
  background-color: #6c757d;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  color: #fff;
  height: 80px;
  margin-bottom: 45px;
`;
export const StyledNavItem = styled.div`
  color: #fff;
  margin: 15px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 200;
  &:hover {
    color: #dae0e5;
    transition-duration: 0.3s;
  }
`;

export const StyledHeaderRadius = styled(StyledHeader)`
  border-radius: 0.25rem;
`;

export const StyledInput = styled.input`
  display: block;
  margin-top: ${(props) => (props.marginTop === "0" ? "0px" : "15px")};
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledContainer = styled.div`
  padding: 20px;
`;
export const StyledContentContainer = styled.div`
  border: 2px solid #eaeaea;
  width: 900px;
  margin: 0 auto;
  background: #fff;
`;

export const StyledErrorMessage = styled.div`
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  padding: 1rem 1rem;
  margin-bottom: 0px;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
  border-radius: 0.25rem;
  padding: 10px 20px;
  display: inline-block;
  font-weight: 400;
  border: 0;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  font-size: 1rem;
  margin-top: 15px;
`;

export const StyledHeader6 = styled.h6`
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 20px;
`;
export const StyledChartContainer = styled.div`
  width: 40em;
  margin: 0 auto;
  margin-top: 50px;
`;
