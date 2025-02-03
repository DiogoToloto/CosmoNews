import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import BannerImg from "./assets/images/banner.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Pagina404 } from "./pages/Pagina404/Pagina404";
import { Contato } from "./pages/Contato/Contato";
import BannerPgnContt from "./assets/images/bannerContato.jpg";

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
      fetch(`https://api.spaceflightnewsapi.net/v4/articles?news_site=${search}`)
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
      <Navbar onChange={(e) => setSearch(e.target.value)} />
      <Routes>
        <Route
          path="/"
          element={
            <Inicio
              dados={news}
              background={BannerImg}
              titulo="Aqui você encontra as melhores notícias sobre lançamentos espaciais"
            />
          }
        ></Route>
        <Route
          path="/contato"
          element={<Contato background={BannerPgnContt} titulo="Contato" />}
        ></Route>
        <Route path="*" element={<Pagina404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
