import React from "react"
import "./styles.css"

export const Banner = ({background, titulo, tamanho, raioBorda}) => {
    return(
        <div className="banner" style={{backgroundImage: `url(${background})`, width: tamanho, borderRadius: raioBorda}}>
            <h1>{titulo}</h1>
        </div>
    )
}