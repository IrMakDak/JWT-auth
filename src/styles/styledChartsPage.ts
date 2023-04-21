import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;
export const StyledSingleChart = styled.div`
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

export const StyledChartsTitles = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 290px;
  margin-bottom: 70px;
  text-align: center;
  padding: 0px 40px;
  p {
    font-weight: 100;
    font-size: 20px;
    color: #3e3e3e;
    line-height: 140%;
    max-width: 533px;
    text-align: center;
    @media (max-width: 1200px) {
      font-size: 18px;
    }
    @media (max-width: 576px) {
      font-size: 16px;
    }
  }

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export const StyledChartsGraphics = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 398px;
  flex-wrap: wrap;
`;

export const StyledChart = styled.div`
  width: 645px;
  max-height: 398px;
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  padding: 16px 24px;
  @media (max-width: 768px) {
    width: 545px;
  }
  @media (max-width: 576px) {
    width: 345px;
  }
`;
