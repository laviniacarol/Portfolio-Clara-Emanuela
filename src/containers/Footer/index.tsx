import {
  FooterContainer,
  Name,
  Subtitle,
  Icons,
  IconLink,
  Icon,
  Copyright
} from './style';

function Footer() {
  return (
    <FooterContainer>
      <Name>CLARA EMANUELA</Name>
      <Subtitle>marketing & branding</Subtitle>
      <Icons>
        <IconLink
          href="https://instagram.com/SEU_INSTAGRAM"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Icon src="/insta.svg" alt="Instagram" />
        </IconLink>
        <IconLink
          href="https://linkedin.com/in/SEU_LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Icon src="/linkedin.svg" alt="LinkedIn" />
        </IconLink>
      </Icons>
      <Copyright>
        © {new Date().getFullYear()} Clara Emanuela. Todos os direitos reservados. <br></br>
        Uma criação de Carol Lavinia, software developer.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;