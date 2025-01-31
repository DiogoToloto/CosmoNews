import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import BannerImg from "./assets/images/banner.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Pagina404 } from "./pages/Pagina404/Pagina404";
import { Contato } from "./pages/Contato/Contato";
import BannerPgnContt from "./assets/images/bannerContato.jpg"
import { MenuHamburguer } from "./components/MenuHamburguer/MenuHamburguer";

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
        <Route path="/contato" element={<Contato background={BannerPgnContt} titulo="Contato" />}></Route>
        <Route path="*" element={<Pagina404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
