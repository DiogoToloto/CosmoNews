import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import BannerImg from "./assets/images/banner.jpg";
import { Banner } from "./components/Banner/Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";

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
      <Banner background={BannerImg} titulo="ola" />
      <Routes>
        <Route
          path="/"
          element={
            <Inicio
              dados={news}
            />
          }
        ></Route>
        <Route path=""></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
