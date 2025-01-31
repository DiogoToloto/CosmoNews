import React from "react";
import logoImg from "../../assets/images/logo.png"
import "./styles.css"

export function Navbar(){
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
                <li><a href="/">Início</a></li>
                <li><a href="/">Tendências</a></li>
                <li><a href="/">Categorias</a></li>
                <li><a href="/contato">Contato</a></li>
              </ul>
            </div>
          </nav>
      </header>
        )
    }

