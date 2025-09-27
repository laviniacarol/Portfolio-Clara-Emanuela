import { GlobalContainer } from "../../GlobalStyles";
import { Title } from "../About/style";
import { Container, InspoImages, InfoInspo } from "./style";
import ig1 from "/ig1.svg";
import ig2 from "/ig2.svg";
import ig3 from "/ig3.svg";

function Inspo() {
  return (
    <>
      <Container>
      <GlobalContainer />
      <div>
      <Title>Principais Inspirações</Title>
      <InfoInspo>
        Estar atualizada é parte do meu trabalho — e do que mais gosto de fazer.
        Acompanho revistas como Vogue, Forbes e Business of Fashion para
        entender tendências de moda, comportamento e mercado, e aplico isso nas
        estratégias que crio. <br></br>No design, minhas referências vão do Minimalismo
        Contemporâneo ao Neobrutalismo, passando pelo estilo Y2K e Editorial,
        sempre buscando unir estética e propósito. Também fico de olho em novas
        tecnologias e ferramentas criativas, porque inovação e resultado andam
        juntos.
      </InfoInspo>
        <InspoImages>
      <img src={ig1} alt="Inspiração 1" />
      <img src={ig2} alt="Inspiração 2" />
      <img src={ig3} alt="Inspiração 3" />
      </InspoImages>
      </div>
      </Container>
    </>
  );
}

export default Inspo;
