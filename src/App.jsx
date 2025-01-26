import React, { useEffect, useState } from "react";
import "./styles/App.css"
import { Navbar } from "./components/NavBar/Navbar"
import { Article } from "./components/Article/Article";
import axios from "axios";
import { DNA } from 'react-loader-spinner'
import { Footer } from "./components/Footer/Footer";
import BannerImg from "./assets/images/banner.jpg"
import { Banner } from "./components/Banner/Banner";

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

      <Banner
      titulo="As melhores notícias sobre o espaço você encontra qui."
      background={BannerImg}
      />

      <section id="articles">
        {news.length === 0 ? (
          <div style={{height: "400px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
                    ) : (
            news.map((article) => {
            return(
              <Article 
                key={article.id}
                title={article.title}
                provider={article.news_site} 
                description={article.summary}
                thumbnail={article.image_url}
              />
              
         )
        }))}
      </section >

      <Footer/>
    </div>
  );
}

export default App;
