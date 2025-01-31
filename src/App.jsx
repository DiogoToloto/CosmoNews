import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import BannerImg from "./assets/images/banner.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Pagina404 } from "./pages/Pagina404/Pagina404";
import { PaginaPadrao } from "./components/PaginaPadrao/PaginaPadrao";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => response.json())
      .then((dados) => {
        setNews(dados.results);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaPadrao background={BannerImg} titulo="Aqui você encontra as melhores notícias sobre lançamentos espaciais"/>}>
          <Route index element={<Inicio dados={news} />}></Route>
        </Route>
        <Route path="*" element={<Pagina404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
