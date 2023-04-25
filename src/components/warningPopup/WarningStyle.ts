import { motion } from "framer-motion";
import styled from "styled-components";

export const WarningContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const WarningContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: auto;
  min-height: 200px;
  width: clamp(200px, 80vw, 500px);
  padding: 40px 45px;
  background-color: #fff;
  border-radius: 20px;
  gap: 10px;
`;

export const WarningButton = styled.button`
  margin-top: 10px;
  padding: 15px 60px;
  background-color: #c9a7eb;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.25rem;
  color: #fff;
`;
