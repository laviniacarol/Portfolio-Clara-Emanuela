import styled from "styled-components";

export const Container = styled.section`
  background-color: #D9D9D9;
  position: relative;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TelephoneImg = styled.img`
  padding-top: 4rem;
  padding-bottom: 4rem;
  height: 650px;
  width: auto;
  display: block;
`;

export const Icons = styled.div`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -30%); 
  display: flex;
  gap: 65px;

`;

export const IconLink = styled.a`
  display: inline-block;
`;

export const WhatsappImg = styled.img`
  height: 84px;
  cursor: pointer;
`;

export const GmailImg = styled.img`
  height: 84px;
  cursor: pointer;
`;