import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #fff;
  width: 100%;
  padding-top: 4rem;
  padding-left: 5rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1.4rem;
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: #000;
`;

export const Subtitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000cc;
  letter-spacing: 2px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
`;

export const IconLink = styled.a`
  display: inline-block;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.15);
  }
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

export const Copyright = styled.span`
  color: #8b8787ff;
  font-size: 14px;
`;