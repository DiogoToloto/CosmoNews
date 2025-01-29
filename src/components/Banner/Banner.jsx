import React from "react"
import "./styles.css"

export const Banner = ({background, titulo}) => {
    return(
        <div className="banner" style={{backgroundImage: `url(${background})`}}>
            <h1>{titulo}</h1>
        </div>
    )
}