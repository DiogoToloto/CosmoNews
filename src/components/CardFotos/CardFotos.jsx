import styled from "styled-components";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdOutlineZoomOutMap } from "react-icons/md";

const ContainerCardFoto = styled.div`

  width: 350px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.725);
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.05);
  }
`;

const ImgCard = styled.div`
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const MainCard = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 10px 10px 10px;
`;

const ConteudoCard = styled.div`
  
  height: 56px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* número de linhas antes dos "..." */
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  h4 {
    font-size: 1.5rem;
    line-height: 1.2;
  }
`

const ContainerCardIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;

  .zoom{
    cursor: pointer;
  }
`;

export const CardFotos = ({banner, titulo}) => {

  const handleDownload = async () => {
    const response = await fetch(banner, { mode: 'cors' });
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = "imagem.jpg";
    a.click();
  
    URL.revokeObjectURL(url); // limpa da memória
  };

  return (
    <ContainerCardFoto>
      <ImgCard>
        <img src={banner} alt="" loading="lazy"/>
      </ImgCard>
      <MainCard>
        <ConteudoCard>
          <h4>{titulo}</h4>
        </ConteudoCard>
        <ContainerCardIcons>
          <a download>
          <LiaDownloadSolid size="24px" className="download" onClick={handleDownload} style={{ cursor: 'pointer' }} />
          </a>
          <MdOutlineZoomOutMap size={"24px"} className="zoom"/>
        </ContainerCardIcons>
      </MainCard>
    </ContainerCardFoto>
  );
};
