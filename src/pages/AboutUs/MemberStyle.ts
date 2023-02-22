import styled from "styled-components";
import { Card } from "../../components/card/CardStyle";

export const CardMemberContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardMemberBody = styled.div`
  width: 70%;
  border: 2px #fff solid;
  display: flex;
  gap: 3rem;

  @media only screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;
export const CardMember = styled(Card)`
max-width: 100%;
`;
export const CardSection = styled.div`
  border: 2px red solid;
  flex-grow: 0.4;
  max-width: 100%;
  flex-basis: 100%;
`;
export const CardDetail = styled.div`
  flex-basis: 100%;
  flex-grow: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  word-break: break-word;
  position: relative;
`;

export const MemberDetailHeader = styled.div``;
export const Responsibilities = styled.div`
  display: flex;
  justify-content: space-between;
`;
