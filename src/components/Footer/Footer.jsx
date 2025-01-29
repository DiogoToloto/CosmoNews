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
                        <a href=""><SiLinkedin style={{color: "#fff", fontSize: "24px"}} /></a>
                    </div>
                    <div>
                        <a href=""><FaWhatsappSquare style={{color: "#fff", fontSize: "24px"}}/></a>
                    </div>
                    <div>
                        <a href="https://github.com/diogotoloto" target="blanck"><VscGithub style={{color: "#fff", fontSize: "24px"}}/></a>
                    </div>
                </div>
                <p>Desenvolvido por DiogoToloto</p>
            </div>
        </footer>
    )
}