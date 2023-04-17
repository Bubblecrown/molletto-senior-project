import styled from "styled-components";

export const BgVideo = styled.video`
  position: relative;
  width: auto;
  height: 100%;
  top: 0;
  left: 0;
`;

export const BgImage = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  top: 0;
  left: 0;
`;

export const FrontImage = styled.img<{ t?: string; l?: string; r?: string }>`
  position: absolute;
  width: auto;
  height: 100%;
  top: ${({ t }) => (t ? t : "0")};
  left: ${({ l }) => (l ? l : "0")};
  right: ${({ r }) => (r ? r : "0")};
  z-index: 3;
`;
export const MidImage = styled.img<{
  t?: number;
  l?: number;
}>`
  position: absolute;
  width: auto;
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
  width: auto;
  height: 100%;
  top: ${({ t }) => (t ? t : 0)};
  left: ${({ l }) => (l ? l : 0)};
  z-index: 1;
`;

export const TextContainer = styled.div`
  position: absolute;
  max-width: 100px;
  height: auto;
  top: 0;
  left: 0;
  z-index: 5;
  overflow-wrap: break-word;
`;
