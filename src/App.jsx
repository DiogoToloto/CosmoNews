import React, { useEffect, useState } from "react";
import "./styles/App.css";
import BannerImg from "./assets/images/banner.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/`)
      .then((response) => response.json())
      .then((dados) => {
        setNews(dados.results);
      });
  }, []);

  useEffect(() => {
    if (search && search.length >= 4) {
      fetch(
        `https://api.spaceflightnewsapi.net/v4/articles?news_site=${search}`
      )
        .then((response) => response.json())
        .then((dados) => {
          setNews(dados.results);
        });
    } else if (search === "") {
      // Requisição para obter todas as notícias novamente quando o campo de busca estiver vazio
      fetch(`https://api.spaceflightnewsapi.net/v4/articles/`)
        .then((response) => response.json())
        .then((dados) => {
          setNews(dados.results);
        });
    }
  }, [search]);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes
        news={news}
        BannerImg={BannerImg}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
