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
              <h1>Space Flight News</h1>
            </div>
            <div>
              <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/">Trending</a></li>
                <li><a href="/">Categories</a></li>
                <li><a href="/">About</a></li>
              </ul>
            </div>
          </nav>
      </header>
        )
    }

