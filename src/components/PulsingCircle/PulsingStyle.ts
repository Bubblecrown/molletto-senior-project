import styled from "styled-components";

export const PulsingContainer = styled.div`
  cursor: pointer;
`;
export const CircleContainer = styled.div<{ d?: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 30px;
  height: 30px;
  pointer-events: none;
  display: ${({ d }) => (d ? "none" : "block")};

  &:before {
    content: "";
    position: relative;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 45px;
    background-color: #fff;
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;

    display: ${({ d }) => (d ? "none" : "block")};
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;

    display: ${({ d }) => (d ? "none" : "block")};
  }
  @keyframes pulse-ring {
    0% {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }

  @keyframes pulse-dot {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;
