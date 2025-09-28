import { Container, Name, Article, Description, Details, ContractImg } from "./style";
import Contract from '../../assets/Contract.svg';
function Modalities() {
  return (
    <>
      <Container>
        <section id="modalidades">
        <Name>Modalidades</Name>
        <Details>Principais dúvidas</Details>
        <ContractImg src={Contract} alt="Contrato" />
        <Article>Modalides de serviços</Article>
        <Description>
          Cada empreendimento tem sua necessidade e juntos podemos entendê-la e
          soluciona-la. Trabalho com pacotes que podem incluir a produção de
          material (fotos, vídeos e designs), outros com desenvolvimento de
          branding, alguns somente com gerenciamento do material como
          organização de postagens e conteúdo, operações de trafégo e insights e
          em alguns casos criando a conexão entre empresas onde faço o contato
          para parcerias.
        </Description>
        <Article>Contato</Article>
        <Description>
          Sou muito comunicativa e adoraria conversar mais com a sua empresa
          para discutirmos as melhores soluções para o seu problema tanto quanto
          você! Entre em contato comigo por whatsapp ou e-mail e marcamos uma
          call ;)
        </Description>
        </section>
      </Container>
      
    </>
  );
}

export default Modalities;
