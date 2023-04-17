import styled from "styled-components";

export const BgVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const FrontImage = styled.img<{t?: string,l?: string,r?: string}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${({ t }) => (t ? t : '0')};
  left: ${({ l }) => (l ? l : '0')};
  right: ${({ r }) => (r ? r : '0')};
  z-index: 3;
`;
export const MidImage = styled.img<{
  t?: number;
  l?: number;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${({ t }) => (t ? t : 0)};
  left: ${({ l }) => (l ? l : 0)};
  z-index: 2;
`;
export const BackImage = styled.img<{
  t?: number;
  l?: number;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${({ t }) => (t ? t : 0)};
  left: ${({ l }) => (l ? l : 0)};
  z-index: 1;
`;
