import React from "react";
import "./styles.css";

export function Article({title,provider,description,thumbnail}){
        return (
            <article id="article">
                <img src={thumbnail} alt="" />
                <div className="article-infos">
                    <h2>{title}</h2>
                    <h3>{provider}</h3>
                    <p>{description}</p>
                    <br />
                    <br />
                   
                </div>
            </article>
        );
    }