import React, { useState, useEffect } from "react";
import logoImg from "../../assets/images/logo1.png";
import NavBarLink from "../NavLink/NavBarLink";
import { useLocation } from "react-router-dom";
import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  background-color: ${({ scrolled, otherPages }) =>
    scrolled || otherPages ? "#333" : "transparent"};

  box-shadow: ${({ scrolled, otherPages }) =>
    scrolled || otherPages ? "0 4px 7px rgba(0, 0, 0, 0.25)" : "none"};

  ${({ otherPages }) =>
    otherPages &&
    `
      transition: none;
    `}
`;

const TituloLogo = styled.h1`
  color: #fff;
`

const Navegacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  height: 90px;
  margin: 0 auto;
  padding: 0 2rem;

  @media screen and (max-width: 700px){
    height: 70px;
  }
`;

const NavBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-family: "Grenze", serif;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1rem;
  margin: 0;

  @media screen and (max-width: 700px){
    display: none;
  }
`;

export function Navbar({menuAberto, setMenuAberto}) {
  const [isScrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isOtherPages = location.pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!isOtherPages) {
        // Só adiciona scrolled se estiver na home
        setScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOtherPages]);

  return (
    <Header scrolled={isScrolled} otherPages={isOtherPages}>
      <Navegacao>
        <NavBrand>
          <picture>
            <img src={logoImg} alt="" />
          </picture>
          <a href="/">
            <TituloLogo>
              Cosmo<strong>News</strong>
            </TituloLogo>
          </a>
        </NavBrand>
        <div>
          <Nav>
            <NavBarLink to={"/"}>Início</NavBarLink>
            <NavBarLink to={"/noticias"}>Notícias</NavBarLink>
            <NavBarLink to={"/contato"}>Contato</NavBarLink>
            <NavBarLink to={"/galeria"}>Galeria</NavBarLink>
          </Nav>
        </div>
        <MenuHamburguer menuAberto={menuAberto} setMenuAberto={setMenuAberto}/>
      </Navegacao>
    </Header>
  );
}
