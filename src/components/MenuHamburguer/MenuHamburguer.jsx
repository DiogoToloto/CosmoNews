import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const MenuHamburger = ({menuAberto, setMenuAberto}) => {

  return (
    <>
      {/* Botão de Menu */}
      <MenuButton menuAberto={menuAberto} onClick={() => setMenuAberto(true)}>
        <CiMenuBurger size={30} color="#fff" />
      </MenuButton>

      {/* Menu Expandido */}
      <MenuOverlay $menuAberto={menuAberto}>
        <CloseButton onClick={() => setMenuAberto(false)}>
          <IoMdClose size={30} />
        </CloseButton>
        <MenuContent $menuAberto={menuAberto}>
          <ul>
            <li>
              <a href="/">INÍCIO</a>
            </li>
            <li>
              <a href="/noticias">NOTÍCIAS</a>
            </li>
            <li>
              <a href="/contato">CONTATO</a>
            </li>
            <li>
              <a href="/galeria">GALERIA</a>
            </li>
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
  opacity: ${({ $menuAberto }) => ($menuAberto ? "0" : "1")};
  pointer-events: ${({ $menuAberto }) => ($menuAberto ? "none" : "auto")};

  @media (min-width: 700px) {
    display: none;
  }
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

  width: ${({ $menuAberto }) => ($menuAberto ? "40%" : "0%")}; /* Animação da largura */
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
  opacity: ${({ $menuAberto }) => ($menuAberto ? "1" : "0")};
  visibility: ${({ $menuAberto }) => ($menuAberto ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

  ul {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    padding: 50px 0px 0px 30px;
  }

  a {
    text-decoration: none;
    color: aliceblue;
    font-size: 1rem;
  }

  a:hover {
    color: #ccc;
  }
`;


export default MenuHamburger;
