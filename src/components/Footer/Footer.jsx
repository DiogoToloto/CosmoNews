import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import styled from "styled-components";

const ContainerFooter = styled.footer`
  background-color: #333;
  padding: 2rem 0;
  width: 100%;
`;

const Logo = styled.h2`
  font-size: 3rem;
  font-family: "Grenze", serif;
`;

const TituloLinks = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ContainerRedeSocial = styled.ul``;

const ContainerInfo = styled.section`
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export function Footer() {
  return (
    <ContainerFooter className="d-flex flex-column justify-content-center align-items-center gap-4">
      <div>
        <Logo className="m-0">
          Cosmo<strong>News</strong>
        </Logo>
      </div>
      <ContainerInfo className="d-flex align-items-center gap-sm-5">
        <div className="container-links-paginas">
          <TituloLinks>Paginas</TituloLinks>
          <ul className="p-0">
            <li>
              <a href="/noticias">Noticias</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
            <li>
              <a href="/galeria">Galeria</a>
            </li>
          </ul>
        </div>
        <div className="container-links-mais">
          <TituloLinks>Mais</TituloLinks>
          <ul className="p-0">
            <li className="">
              <a href="/termos">Termos e condiçoes</a>
            </li>
            <li>
              <a href="/politica-de-privacidade">Politica de privacidade</a>
            </li>
            <li>
              <a href="/politicaCookies">Politica de cookies</a>
            </li>
          </ul>
        </div>

        <ContainerRedeSocial className="d-flex gap-4">
          <li>
            <a href="https://www.linkedin.com/in/diogo-toloto-programador/">
              <SiLinkedin style={{ color: "#fff", fontSize: "2rem" }} />
            </a>
          </li>
          <li>
            <a href=" https://wa.me/11969223602">
              <FaWhatsappSquare style={{ color: "#fff", fontSize: "2rem" }} />
            </a>
          </li>
          <li>
            <a href="https://github.com/diogotoloto" target="blanck">
              <VscGithub style={{ color: "#fff", fontSize: "2rem" }} />
            </a>
          </li>
        </ContainerRedeSocial>
      </ContainerInfo>
      <div>
        <p>Copyright&copy; DiogoToloto</p>
      </div>
    </ContainerFooter>
  );
}
