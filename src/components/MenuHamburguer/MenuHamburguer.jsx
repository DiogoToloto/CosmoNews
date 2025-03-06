import { useState } from "react";
import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão de Menu */}
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(true)}>
        <CiMenuBurger size={30} color="#fff" />
      </MenuButton>

      {/* Menu Expandido */}
      <MenuOverlay isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>
          <IoMdClose size={30} />
        </CloseButton>
        <MenuContent isOpen={isOpen}>
          <ul>
            <li><a href="/">INÍCIO</a></li>
            <li><a href="/noticias">NOTÍCIAS</a></li>
            <li><a href="/contato">CONTATO</a></li>
            <li><a href="/galeria">GALERIA</a></li>
          </ul>
        </MenuContent>
      </MenuOverlay>
    </>
  );
};

// Estilos
const MenuButton = styled.button`
 
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 0;
  transition: opacity ease-in-out;

  /* Esconde o botão quando o menu está aberto */
  opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  pointer-events: ${({ isOpen }) => (isOpen ? "none" : "auto")};
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 99;

  width: ${({ isOpen }) => (isOpen ? "50%" : "0%")}; /* Animação da largura */
  transition: width 0.5s ease-in-out;
  overflow: hidden; /* Evita rolagem quando fechar */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

const MenuContent = styled.div`
  /* Quando o menu está fechado, oculta o conteúdo */
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

  ul {
    list-style: none;
    padding: 50px 0px 0px 30px;
  }

  li {
    margin: 20px 0;
    cursor: pointer;
    font-size: 1.5rem;
  }

  a{
    text-decoration: none;
    color: aliceblue;
  }

  a:hover{
    text-decoration: underline;
  }
`;

export default MenuHamburger;
