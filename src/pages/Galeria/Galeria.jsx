import styled from "styled-components";
import bannerGaleria from "../../assets/images/bannerGaleria.jpg";
import { InputBusca } from "../../components/CampoBusca/CampoBusca";
import { Tags } from "../../components/Tags/Tags";
import { CardFotos } from "../../components/CardFotos/CardFotos";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem;
`;

const BannerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url(${bannerGaleria});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  width: 100%;
  height: 300px;
  box-shadow: 0px 0px 10px rgba(0,0,0);
  border-radius: 25px;
  margin-top: 100px;

  p {
    font-size: 3rem;
    color: aliceblue;
    font-family: Arial, Helvetica, sans-serif;
  }

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 70px;
    left: 0;
    border-radius: 0;
    margin: 0;
  }
`;

const ContainerPesquisa = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 700px) {
    margin-top: 360px;
  }
  

  label {
    font-size: 1.5rem;
  }

  input {
    width: 100%;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;

  h4 {
    font-size: 1rem;
  }
`;

const GaleriaContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const ImgsContainer = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const Galeria = ({
  imagens,
  handleChangeFotos,
  buscar,
  filtrarPorTagFotos,
}) => {
  return (
    <SectionContainer>
      <BannerImg>
        <p>Galeria de fotos</p>
      </BannerImg>
      <ContainerPesquisa>
        <label htmlFor="">Pesquisa: </label>
        <InputBusca
          value={buscar}
          placeholder="Exemplo: Andromeda"
          onChange={handleChangeFotos}
        />
      </ContainerPesquisa>
      <TagsContainer>
        <h4>Busque por tags: </h4>
        <Tags value="Estrelas" onClick={filtrarPorTagFotos} />
        <Tags value="Galaxias" onClick={filtrarPorTagFotos} />
        <Tags value="Planetas" onClick={filtrarPorTagFotos} />
        <Tags value="Nebulosas" onClick={filtrarPorTagFotos} />
        <Tags value="Luas" onClick={filtrarPorTagFotos} />
      </TagsContainer>
      <GaleriaContainer>
        <ImgsContainer>
          {imagens.map((imagem) => (
            <CardFotos
              key={imagem.id}
              banner={imagem.link}
              titulo={imagem.titulo}
            />
          ))}
        </ImgsContainer>
      </GaleriaContainer>
    </SectionContainer>
  );
};
