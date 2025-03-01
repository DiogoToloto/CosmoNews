import React from "react";
import "./styles.css"
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";

export function Footer(){
    return(
        <footer>
            <div id="container-footer">
                <div id="container-logos">
                    <div>
                        <a href="https://www.linkedin.com/in/diogo-toloto-programador/"><SiLinkedin style={{color: "#fff", fontSize: "24px"}} /></a>
                    </div>
                    <div>
                        <a href=" https://wa.me/11969223602"><FaWhatsappSquare style={{color: "#fff", fontSize: "24px"}}/></a>
                    </div>
                    <div>
                        <a href="https://github.com/diogotoloto" target="blanck"><VscGithub style={{color: "#fff", fontSize: "24px"}}/></a>
                    </div>
                </div>
                <p>&copy;Desenvolvido por DiogoToloto</p>
            </div>
        </footer>
    )
}