import styled from "styled-components";
import { Card } from "../../components/card/CardStyle";

export const CardMemberContainer = styled.div`
  width: 100%;
  height: 46em;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardMemberBlock = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
`;
export const CardMemberBody = styled.div`
  width: 70%;
  border: 2px #fff solid;
  display: flex;
  gap: 3rem;
  height: 100%;

  @media only screen and (max-width: 1150px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
export const CardSection = styled.div`
  border: 2px red solid;
  flex-grow: 0.1;
  max-width: 100%;
  flex-basis: 0;
  align-items: center;
  display: flex;
  @media only screen and (min-width: 550px) and (max-width: 735px) {
    flex-basis: 100%;
  }
`;
export const CardMember = styled(Card)`
  max-width: 100%;
  min-width: 50px;
`;

export const CardDetail = styled.div`
  flex-basis: 0;
  flex-grow: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  word-break: break-word;
  position: relative;
  @media only screen and (min-width: 550px) and (max-width: 735px) {
    flex-basis: 100%;
  }
`;

export const MemberDetailHeader = styled.div``;
export const Responsibilities = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 100%;
`;

export const SocialLogoContainer = styled.div`
  text-align: center;
  margin: 20px 0 0 0;
`;
export const SocialImg = styled.img`
  max-width: 25px;
  height: auto;
  margin: 0 10px;
`;
export const LinkLogo = styled.a``;
