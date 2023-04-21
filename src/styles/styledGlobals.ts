import styled from "styled-components";

export const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  text-align: left;
  color: #000000;

  display: block;
  max-width: 758px;
  @media (max-width: 1200px) {
    font-size: 38px;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 30px;
    margin: 0 auto;
    text-align: center;
  }
`;
