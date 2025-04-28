import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
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
  justify-content: space-between;
  padding: 10px 10px 0px 10px;
`;

const ContainerCardIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CardFotos = ({banner, titulo}) => {
  return (
    <ContainerCardFoto>
      <ImgCard>
        <img src={banner} alt="" loading="lazy"/>
      </ImgCard>
      <MainCard>
        <div>
          <h4>{titulo}</h4>
          <p>descricao</p>
        </div>
        <ContainerCardIcons>
          <FaRegHeart size={"20px"} />
          <MdOutlineZoomOutMap size={"20px"} />
        </ContainerCardIcons>
      </MainCard>
    </ContainerCardFoto>
  );
};
