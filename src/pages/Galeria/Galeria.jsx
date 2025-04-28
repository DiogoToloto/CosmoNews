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
    padding: 40px;
`

const ContainerPesquisa = styled.div`
    
    display: flex;
    gap: 10px;
    align-items: center;
    
`

const TagsContainer = styled.div`

    display: flex;
    gap: 15px;
`

const GaleriaContainer = styled.div`
    
    width: 100%;
    display: flex;
    gap: 20px;
`

const ImgsContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    
`

export const Galeria = ({imagens}) => {
    return(
       <SectionContainer>
        <Banner background={bannerGaleria} tamanho="100%" raioBorda="25px" titulo="Galeria de imagens"/>
        <ContainerPesquisa>
            <label htmlFor="">Pesquisa: </label>
            <InputBusca placeholder="Exemplo: Andromeda"/>
        </ContainerPesquisa>
        <TagsContainer>
            <h4>Busque por tags: </h4>
            <Tags value="Estrelas"/>
            <Tags value="Galaxias"/>
            <Tags value="Planetas"/>
            <Tags value="Nebulosas"/>
        </TagsContainer>
        <GaleriaContainer>
            <ImgsContainer>
                {imagens.map(imagem => <CardFotos banner={imagem.link} titulo={imagem.titulo}/>)}

            </ImgsContainer>
            <div style={{border: "1px solid #ff0000",  width: "30%", height: "500px"}}>

            </div>
        </GaleriaContainer>
       </SectionContainer>
    )
}