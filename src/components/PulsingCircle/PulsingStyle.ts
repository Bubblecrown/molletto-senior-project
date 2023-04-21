import styled from "styled-components";

export const PulsingContainer = styled.div`
  cursor: pointer;
  width: 90vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  @media only screen and (max-width: 767px) {
    height: 130vh;
  }
`;
export const CircleContainer = styled.div<{ d?: any }>`
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

  @keyframes pulse-ring {
    0% {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }
`;

export const PulsingBox = styled.div`
  background: #fff;
  border-radius: 50%;
  margin: 10px;
  height: 20px;
  width: 20px;
  pointer-events: none;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
  transform: scale(1);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.5);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      display: none;
    }
  }
`;
