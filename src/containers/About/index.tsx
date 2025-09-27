import { GlobalContainer } from "../../GlobalStyles";
import { ClaraAbout } from "./style";
import { Container, Info, STitle, Title, Left, ClientImage } from "./style";
import Clara2 from "../../assets/Clara2.svg";


const About = () => {
  return (
    <Container>
      <Left>
        <Title>Sobre mim </Title>
        <ClientImage>
       <ClaraAbout src={Clara2} alt="Clara em Paris" />    
        </ClientImage>
      </Left>
      <div>
        <STitle>Um pouco de quem sou</STitle>
        <Info>
          Oi! Tenho 22 anos e um olhar inquieto para tudo que envolve
          criatividade e estratégia. Atuo com marketing e social media, áreas
          onde encontrei o equilíbrio perfeito entre dados e estética — porque
          sim, resultado e beleza podem (e devem) andar juntos.<br /> Já deixei minha
          marca em projetos em Araranguá (SC) e Gramado (RS) em agências,
          hotéis, lojas de roupas e restaurantes, além de ter vivido uma
          experiência transformadora na Escócia, onde trabalhei por um ano como
          freelancer e aprendi na prática a importância da adaptabilidade e da
          visão global.<br/> Sou movida por desafios e tenho um senso visual apurado
          e crítico, sempre de olho nas tendências que ditam o presente e
          constroem o futuro. Trabalho com foco, criatividade e propósito — e
          acredito que boas ideias não nascem do acaso, mas da mistura certa
          entre estratégia e ousadia.
        </Info>
      </div>
      <GlobalContainer />
    </Container>
  );
};

export default About;
