import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 20px;
`;
export const StyledContentContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  margin-top: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const StyledH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  color: #000000;
  span {
    color: #4f46e5;
    font-family: "Schibsted Grotesk", sans-serif;
    font-weight: 900;
  }
  @media (max-width: 1200px) {
    font-size: 44px;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
  @media (max-width: 576px) {
    font-size: 30px;
  }
`;
export const StyledMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 768px;

  @media (max-width: 992px) {
    padding: 0px 20px;
  }
  @media (max-width: 576px) {
    align-items: center;
    text-align: center;
  }
`;
export const StyledMainDescription = styled.h2`
  display: block;
  max-width: 675px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  text-align: left;
  color: #3e3e3e;
  margin-top: 50px;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
    text-align: center !important;
  }
`;
export const StyledMainButton = styled.button`
  display: block;
  width: 291px;
  height: 60px;

  background: #4f46e5;
  color: #ffffff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  border: 0;
  margin-top: 60px;
  cursor: pointer;
  &:hover {
    transition-duration: 0.3s;
    background: #433bc2;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
    width: 231px;
  }
  @media (max-width: 576px) {
    width: 180px;
    font-size: 16px;

    height: 50px;
  }
`;

export const StyledErrorMessage = styled.div`
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  padding: 2rem 2rem;
  margin-bottom: 0px;
  margin-top: 20px;
  font-size: 16px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 32px;

  background: #4f46e5;
  border-radius: 10px;
  padding: 12px 24px;
  gap: 8px;
  text-align: center;
  border: 0;
  color: #fff;
  cursor: pointer;
  &:hover {
    transition-duration: 0.3s;
    background: #433bc2;
  }
`;

export const StyledMainPhotoBg = styled.div`
  display: block;
  position: relative;
  width: 30%;
  height: 532px;
  background: rgba(79, 70, 229, 0.2);
  border-radius: 10px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const StyledMainPhotoContainer = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transform: translate(20px, 20px);
`;
export const StyledAdvantages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 120px 0px;
  justify-content: center;
`;
export const StyledAdvantagesItem = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 308px;

  background: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 10px;

  font-weight: 100;
  font-size: 16px;
  line-height: 22px;

  color: #3e3e3e;
  span {
    font-weight: 600;
    font-size: 20px;

    line-height: 27px;
    margin-bottom: 15px;

    color: #111827;
  }
`;
