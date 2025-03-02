import React from "react";
import "./styles.css";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";

export function Footer() {
  return (
    <footer
      id="container-footer"
      className="d-flex flex-column justify-content-center align-items-center gap-4"
    >
      <div>
        <h2 className="logo-footer m-0">
          Cosmo<strong>News</strong>
        </h2>
      </div>
      <div className="d-flex align-items-center gap-5">
        <div className="container-links-paginas">
          <h4 className="titulo-paginas">Paginas</h4>
          <ul className="p-0">
            <li>
              <a href="/">Noticias</a>
            </li>
            <li>
              <a href="/"></a>Contato
            </li>
            <li>
              <a href="/">Galeria</a>
            </li>
          </ul>
        </div>
        <div className="container-links-mais">
          <h4 className="titulo-mais">Mais</h4>
          <ul className="p-0">
            <li className="">
              <a href="/">Termos e condiçoes</a>
            </li>
            <li>
              <a href="/"></a>Politica de privacidade
            </li>
            <li>
              <a href="/">Politica de cookies</a>
            </li>
          </ul>
        </div>

        <div id="container-logos" className="d-flex gap-1">
          <div>
            <a href="https://www.linkedin.com/in/diogo-toloto-programador/">
              <SiLinkedin style={{ color: "#fff", fontSize: "24px" }} />
            </a>
          </div>
          <div>
            <a href=" https://wa.me/11969223602">
              <FaWhatsappSquare style={{ color: "#fff", fontSize: "24px" }} />
            </a>
          </div>
          <div>
            <a href="https://github.com/diogotoloto" target="blanck">
              <VscGithub style={{ color: "#fff", fontSize: "24px" }} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p>Copright&copy; DiogoToloto</p>
      </div>
    </footer>
  );
}
