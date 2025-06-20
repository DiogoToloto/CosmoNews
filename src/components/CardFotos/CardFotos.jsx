import styled from "styled-components";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useState } from "react";

const ContainerCardFoto = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.725);
  border-radius: 10px;
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
`;

const ContainerCardIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;

  .zoom {
    cursor: pointer;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: ${({ open }) => (open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ZoomedImage = styled.img`
  max-width: 100vw;
  max-height: 100vh;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  cursor: zoom-out;
`;

export const CardFotos = ({ banner, titulo }) => {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <ContainerCardFoto>
      <ImgCard>
        <img src={banner} alt="" loading="lazy" />
      </ImgCard>
      <MainCard>
        <ConteudoCard>
          <h4>{titulo}</h4>
        </ConteudoCard>
        <ContainerCardIcons>
          <a
            href={banner.replace("/upload/", "/upload/fl_attachment/")}
            download
          >
            <LiaDownloadSolid
              size="24px"
              className="download"
              style={{ cursor: "pointer" }}
            />
          </a>

          <MdOutlineZoomOutMap
            size="24px"
            className="zoom"
            onClick={() => setZoomOpen(true)}
          />
        </ContainerCardIcons>
      </MainCard>
      {/* Modal de Zoom */}
      <Overlay open={zoomOpen} onClick={() => setZoomOpen(false)}>
        <ZoomedImage src={banner} alt={titulo} />
      </Overlay>
    </ContainerCardFoto>
  );
};
