import React from "react";
import { Container, Logo, Nav, NavLink, SocialIcons, Icon } from "./style";
import { GlobalContainer } from "../../GlobalStyles";

const Header = () => {
  return (
    <Container>
      <GlobalContainer/>
      <Nav>
        <Logo>C.BRITO</Logo>
        <NavLink href="/">Inspirações</NavLink>
        <NavLink href="/">Sobre mim</NavLink>
        <NavLink href="/">Modalidades</NavLink>
      </Nav>

      <SocialIcons>
        <Icon src="/insta.svg" alt="Instagram" />
        <Icon src="/linkedin.svg" alt="LinkedIn" />
      </SocialIcons>
    </Container>
  );
};

export default Header;
