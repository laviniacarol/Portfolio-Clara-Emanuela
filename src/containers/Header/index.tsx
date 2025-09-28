import React from "react";
import { Container, Logo, Nav, NavLink, SocialIcons, Icon } from "./style";
import { GlobalContainer } from "../../GlobalStyles";

const Header = () => {
  return (
    <Container>
      <GlobalContainer/>
      <Nav>
        <Logo>C.BRITO</Logo>
        <NavLink href="#inspiracoes">Inspirações</NavLink>
        <NavLink href="#sobre-mim">Sobre mim</NavLink>
        <NavLink href="#modalidades">Modalidades</NavLink>
      </Nav>

      <SocialIcons>
        <a href="https://www.instagram.com/claraemanuelab/" target="_blank" rel="noopener noreferrer">
          <Icon src="/insta.svg" alt="Instagram" />
        </a>
        <Icon src="/linkedin.svg" alt="LinkedIn" />
      </SocialIcons>
    </Container>
  );
};

export default Header;