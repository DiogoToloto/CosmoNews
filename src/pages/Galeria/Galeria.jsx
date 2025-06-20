import styled from "styled-components"
import { Banner } from "../../components/Banner/Banner"
import bannerGaleria from "../../assets/images/bannerGaleria.jpg"
import { InputBusca } from "../../components/CampoBusca/CampoBusca"
import { Tags } from "../../components/Tags/Tags"
import { CardFotos } from "../../components/CardFotos/CardFotos"

const SectionContainer = styled.section`
    
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 90px;
    max-width: 1240px;
    margin: 90px auto;
    padding: 2rem;
`

const ContainerPesquisa = styled.div`
    
    display: flex;
    gap: 10px;
    align-items: center;
    
    label{
        font-size: 1.5rem;
    }

    input{
        width: 100%;
    }
`

const TagsContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;

    h4{
        font-size: 1rem;
    }
`

const GaleriaContainer = styled.div`
    
    width: 100%;
    display: flex;
    gap: 20px;
`

const ImgsContainer = styled.div`
    
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    @media (max-width: 700px) {
        justify-content: center;
    }
`

export const Galeria = ({imagens, handleChangeFotos, buscar, filtrarPorTagFotos}) => {
    return(
       <SectionContainer>
        <Banner background={bannerGaleria} tamanho="100%" raioBorda="25px" titulo="Galeria de imagens"/>
        <ContainerPesquisa>
            <label htmlFor="">Pesquisa: </label>
            <InputBusca value={buscar}  placeholder="Exemplo: Andromeda" onChange={handleChangeFotos}/>
        </ContainerPesquisa>
        <TagsContainer>
            <h4>Busque por tags: </h4>
            <Tags value="Estrelas" onClick={filtrarPorTagFotos}/>
            <Tags value="Galaxias" onClick={filtrarPorTagFotos}/>
            <Tags value="Planetas" onClick={filtrarPorTagFotos}/>
            <Tags value="Nebulosas" onClick={filtrarPorTagFotos}/>
            <Tags value="Luas" onClick={filtrarPorTagFotos}/>
        </TagsContainer>
        <GaleriaContainer>
            <ImgsContainer>
                {imagens.map(imagem => <CardFotos key={imagem.id} banner={imagem.link} titulo={imagem.titulo}/>)}

            </ImgsContainer>
        </GaleriaContainer>
       </SectionContainer>
    )
}