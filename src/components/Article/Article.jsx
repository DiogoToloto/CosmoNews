import React from "react";
import "./styles.css";

export function Article({title,provider,description,thumbnail,font,dataPublicacao}){
        return (
            <article id="article">
                <img src={thumbnail} alt="" />
                <div className="article-infos">
                    <a href={font}>
                        <h2>{title}</h2>
                    </a>
                    <h3>{provider}</h3>
                    <p>{description}</p>
                    <br />
                    <br />
                </div>
            </article>
        );
    }