import styled from "styled-components";

export const Line = styled.div`
  position: relative;
  text-align: center;
  max-width: 100%;
`;

export const Logo = styled.img<{
  c?: string;
  o?: number;
  z?: string;}>`
  position: sticky;

  padding: 0 20px;
  max-width: 120px;
  height: auto;
  z-index: ${({ z }) => (z ? z : '0')};
  @media only screen and (max-width: 1100px) {
    padding: 0;
    max-width: 80px;
  }
`;

export const SpanText = styled.div<{
  c?: string;
  o?: number;
  z?: string;
}>`
  height: auto;
  position: relative;
  text-align: center;
  max-width: 100%;
  &::after,
  &::before {
    content: "";
    position: absolute;
    margin: auto;
    height: 2px;
    background-color: #ffffff;
    width: 45%;
    top: 45%;
    z-index: ${({ z }) => (z ? z : "-1")};
    color: #ffffff;
  }
  &::after {
    right: 0;
    @media (max-width: 768px) {
      width: 35%;
    }
    @media (max-width: 480px) {
      width: 25%;
    }
  }
  &::before {
    left: 0;
    @media (max-width: 768px) {
      width: 35%;
    }
    @media (max-width: 480px) {
      width: 25%;
    }
  }
`;






