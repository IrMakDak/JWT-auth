import styled from "styled-components";

export const StyledLoginPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: row;
  background-color: #f5f5f5;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const StyledAuthorizationContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 100px 20px;
    height: 100%;
  }
`;
export const StyledAnalyticsContainer = styled.div`
  width: 60%;
  min-height: 100%;
  background-color: #f3f3ff;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    transform: translate(0%, 0%);
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    width: 100%;
  }
`;

export const StyledTitle = styled.div`
  color: ##111827;
  font-size: 2.8rem;
  margin-bottom: 8px;
  text-align: left;
  font-style: normal;
  font-weight: 500;
`;
export const StyledEntrance = styled.div`
  width: 400px;
  height: 422px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    transform: translate(0%, 0%);
  }
`;
export const StyledInput = styled.input`
  display: block;
  margin-top: 24px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  padding: 12px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 24px;
  gap: 16px;
`;
export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  ailgn-items: space-between;
`;
export const StyledAdditionalProps = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ailgn-items: center;
  margin-top: 16px;
`;
export const StyledCheckbox = styled.input`
  background: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 4px;
  margin-right: 12px;

  height: 24px;
  width: 24px;
  cursor: pointer;
`;
export const StyledLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 24px;

  color: #4f46e5;
`;
export const StyledLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 24px;
  display: flex;
`;
export const StyledLogo = styled.img``;
export const StyledCalls = styled.img`
  display: block;
  width: 60%;
  height: 40%;
  top: 150px;
  left: 10%;
  position: relative;
  @media (max-width: 768px) {
    width: 400px;
    height: 240px;
    position: static;
    margin-top: 30px;
  }
  @media (max-width: 576px) {
    width: 300px;
    height: 170px;
    position: static;
    margin-top: 30px;
  }
`;
export const StyledDashboard = styled(StyledCalls)`
  top: 5%;
  left: 30%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const StyledAnalyticsLabel = styled.div`
  margin-top: 100px;
  padding: 20px;
  & h6 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 32px;
    text-align: center;
  }
  & p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 24px;
    text-align: center;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    transform: translate(0%, 0%);
  }
`;
