import React, { useEffect, useState } from "react";
import "./styles/App.css";
import BannerImg from "./assets/images/banner2.jpg";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { BeatLoader } from "react-spinners";
import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #222;
    color: #fff;
    font-family: 'Roboto', sans-serif;
}
`;

function App() {
  const [news, setNews] = useState([]); // Todas as notícias
  const [lastNews, setLastNews] = useState([]); // Últimas 10 notícias
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const limite = 10;

  useEffect(() => {
    const buscarNoticias = async () => {
      setLoading(true);
      try {
        // Requisição para as últimas 10 notícias
        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v4/articles/?limit=${limite}&offset=0`
        );
        const dados = await response.json();
        setLastNews(dados.results);

        // Requisição para as demais notícias
        const responseAll = await fetch(
          `https://api.spaceflightnewsapi.net/v4/articles/?limit=${limite}&offset=${
            pagina * limite
          }`
        );
        const dadosAll = await responseAll.json();
        setNews(dadosAll.results);

        // Atualiza o total de páginas baseado na contagem de artigos
        setTotalPaginas(Math.ceil((dadosAll.count || 100) / limite));
      } catch (erro) {
        console.error("Erro ao buscar notícias:", erro);
      }
      setLoading(false);
    };

    buscarNoticias();
  }, [pagina]);

  useEffect(() => {
    if (search.length >= 3) {
      fetch(
        `https://api.spaceflightnewsapi.net/v4/articles?title_contains=${search}`
      )
        .then((response) => response.json())
        .then((dados) => {
          setNews(dados.results);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else if (search === "") {
      setLoading(true);
      fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=${limite}&offset=${
          (pagina - 1) * limite
        }`
      )
        .then((response) => response.json())
        .then((dados) => {
          setNews(dados.results);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [search, pagina]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <BeatLoader color={"#36D7B7"} loading={loading} size={15} />
      </div>
    );
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const aoClicarNaTag = (tag) => {
    setSearch(tag)
    console.log(tag)
  }

  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Navbar />
      <AppRoutes
        lastNews={lastNews}
        news={news}
        BannerImg={BannerImg}
        handleChange={handleChange}
        pagina={pagina}
        setPagina={setPagina}
        totalPaginas={totalPaginas}
        aoClicarNaTag={aoClicarNaTag}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
