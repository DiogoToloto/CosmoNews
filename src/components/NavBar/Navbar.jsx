import React, { useState, useEffect } from "react";
import logoImg from "../../assets/images/logo1.png";
import styles from "./NavBar.module.css";
import { MenuHamburguer } from "../MenuHamburguer/MenuHamburguer";
import NavBarLink from "../NavLink/NavBarLink";
import { useLocation } from "react-router-dom";

export function Navbar({ onChange }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <header
      className={`${styles.header} ${
        isHomePage && scrolled ? styles.scrolled : ""
      } ${!isHomePage ? styles.otherPages : ""}`}
    >
      <div className={styles.navegacao}>
        <div className={styles.navBrand}>
          <picture>
            <img src={logoImg} alt="" />
          </picture>
          <h1>Cosmo<strong>News</strong></h1>
        </div>
        <div>
          <nav className={styles.navList}>
            <NavBarLink to={"/"}>Início</NavBarLink>
            <NavBarLink to={"/noticias"}>Notícias</NavBarLink>
            <NavBarLink to={"/contato"}>Contato</NavBarLink>
            <NavBarLink to={"/galeria"}>Galeria</NavBarLink>
          </nav>
        </div>
        <MenuHamburguer />
      </div>
    </header>
  );
}