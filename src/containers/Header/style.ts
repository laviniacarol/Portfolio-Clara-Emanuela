import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 90px;
  font-family: Inter;
  justify-content: space-between;
  padding: 1rem 4rem;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  padding-right: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #8b8787ff;
  font-weight: 500;
  align-items: center;


  &:hover {
    color: #555;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Icon = styled.img`
  width: 24px;
  cursor: pointer;
  height: 24px;
`;
