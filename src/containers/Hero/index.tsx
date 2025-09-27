import { GlobalContainer } from "../../GlobalStyles";
import { Name, Area, Button, Container, Clara, ClientImage } from "./style";
import ClaraImg from "../../assets/Clara.svg";

function Hero() {
  return (
    <>
      <GlobalContainer />
      <Container>
        <div>
          <Name>Clara Brito</Name>
          <Area>Marketing & Social Media</Area>
          <Button>Contato</Button>
        </div>

        <ClientImage>
         <Clara src={ClaraImg} alt="Clara Brito" />
        </ClientImage>
      </Container>
    </>
  );
}

export default Hero;
