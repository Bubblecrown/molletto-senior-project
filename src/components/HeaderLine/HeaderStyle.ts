import styled from "styled-components";

export const Line = styled.div`
  position: relative;
  text-align: center;
  margin: 0 10px;
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
    color: #ffffff;
  }
  &::after {
    right: 0;
  }
  &::before {
    left: 0;
  }
`;


export const Logo = styled.img<{
  c?: string;
}>`
  background-color:${({ c }) => (c ? c : "#d9d9d9")} ;
  position: sticky;
  z-index: 1;
  padding: 0 20px;
  max-width: 120px;
  height: auto;
`;
export const SpanText = styled.div``;
