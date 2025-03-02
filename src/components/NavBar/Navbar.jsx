import React from "react";
import logoImg from "../../assets/images/logo.png";
import styles from "./NavBar.module.css";
import { MenuHamburguer } from "../MenuHamburguer/MenuHamburguer";
import NavBarLink from "../NavLink/NavBarLink";

export function Navbar({onChange}) {
  return (
    <header className={styles.header}>
      <div className={styles.navegacao}>
        <div className={styles.navBrand}>
          <picture>
            <img src={logoImg} alt="" />
          </picture>
          <h1>CosmoNews</h1>
        </div>
        <div>
          <nav className={styles.navList}>
            <NavBarLink to={"/"}>Início</NavBarLink>
            <NavBarLink to={"/noticias"}>Notícias</NavBarLink>
            <NavBarLink to={"/Contato"}>Contato</NavBarLink>
          </nav>
        </div>
        <MenuHamburguer/>
      </div>
    </header>
  );
}
