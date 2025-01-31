import React from "react";
import logoImg from "../../assets/images/logo.png";
import "./styles.css";
import { MenuHamburguer } from "../MenuHamburguer/MenuHamburguer";

export function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <picture>
            <img src={logoImg} alt="" />
          </picture>
          <h1>CosmoNews</h1>
        </div>
        <div>
          <ul className="nav-list">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Tendências</a>
            </li>
            <div className="dropdown">
              <button
                className="btn text-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>
        <MenuHamburguer/>
      </nav>
    </header>
  );
}
