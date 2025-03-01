import React from "react";
import logoImg from "../../assets/images/logo.png";
import "./styles.css";
import { MenuHamburguer } from "../MenuHamburguer/MenuHamburguer";
import { DropDown } from "../DropDown/DropDown";

export function Navbar({onChange}) {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <picture>
            <img src={logoImg} alt="" />
          </picture>
          <h1>CosmoNews</h1>
        </div>
        <div className="comtainer-busca" >
          <label htmlFor=""></label>
          <input type="text" onChange={onChange} className="campo-busca" placeholder="Busque por agencia:"/>
        </div>
        <div>
          <ul className="nav-list">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Tendências</a>
            </li>
            <DropDown/>
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
