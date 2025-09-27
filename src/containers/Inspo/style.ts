import styled from "styled-components";


export const InspoImages = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10rem;
  gap: 5rem;
  height: 310px;
  width: 100%;

  img {
    transition: transform 0.3s ease;
    height: 400px;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`

export const Container = styled.section `
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-left: 11.5rem;
  align-items: center;

  `

  export const InfoInspo = styled.p `
  font-size: 25px;
  width: 1440px;
  text-align: left;
  padding-bottom: 10rem;
  justify-content: center;
  align-items: center;
  color: #8b8787ff;
  `