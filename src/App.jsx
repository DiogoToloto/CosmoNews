import React, { useEffect, useState } from "react";
import "./styles/App.css"
import { Navbar } from "./components/NavBar/Navbar"
import { Article } from "./components/Article/Article";
import axios from "axios";

function App(){

  const [news, setNews] = useState([]);

  useEffect(() => {

    async function loadNews() {
      const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles");

      const newsData = response.data.results || response.data;
      console.log(newsData);
      setNews(newsData);
    }

    loadNews();

    
  }, [])

    return (
    <div>
      
      <Navbar/>

      <section id="articles">
        {news.map((article) => {
            return(
              <Article 
                key={article.id}
                title={article.title}
                provider={article.news_site} 
                description={article.summary}
                thumbnail={article.image_url}
              />
            )
        })}
      </section >
    </div>
  );
}

export default App;
