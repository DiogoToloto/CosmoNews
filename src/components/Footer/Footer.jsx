import React from "react";
import "./styles.css"
import logoFb from "../../assets/images/fb_icon-icons.com_65434.png"
import logoInst from "../../assets/images/instagram_icon-icons.com_65435.png"
import logoGithub from "../../assets/images/github_logo_icon_143772.png"

export function Footer(){
    return(
        <footer>
            <div id="container-footer">
                <div id="container-logos">
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=61562221756859"><img src={logoFb} alt="" /></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/diogo_silvss/"><img src={logoInst} alt="" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/diogotoloto" target="blanck"><img src={logoGithub} alt="" /></a>
                    </div>
                </div>
                <p>Desenvolvido por DiogoToloto</p>
            </div>
        </footer>
    )
}