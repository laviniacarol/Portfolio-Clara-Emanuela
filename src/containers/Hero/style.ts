import styled, { keyframes } from "styled-components";


const slideInLeft = keyframes`
  from {
    transform: translateX(-60px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Name = styled.h1`
  font-size: 68px;
  padding-bottom: 0.1rem;
  font-weight: bold;
  color: black;
  animation: ${slideInLeft} 0.7s ease;
`;

export const Area = styled.h2 `
   font-size: 22px;
   font-weight: 500;
   margin-bottom: 3.5rem;
   color: #8b8787ff;
`

export const Button = styled.button `
  font-size: 18px;
  font-weight: medium;
  border: none;
  border-radius: 12px;
  color: white;
  height: 50px;
  width: 180px;
  cursor: pointer;
  background-color: black;
  padding: 16px 12px;

  &:hover {
    opacity: 0.8;
  }
`
export const Container = styled.section `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4rem;
  padding-right: 0;
  margin: 0;
`

export const ClientImage = styled.div `
display:flex;
align-items: center;
height: 100%;
margin: 0%;
`

export const Clara = styled.img `
  height: 650px;
  width: 770px;
  display: block;
  object-fit: cover;
  margin-right: 0;
`