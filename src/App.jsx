import React, { useEffect, useState } from "react";
import "./styles/App.css";
import BannerImg from "./assets/images/banner2.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { BeatLoader } from "react-spinners"; // 1. Importando o componente BeatLoader da biblioteca react-spinners

function App() {
  const [news, setNews] = useState([]); // Estado para armazenar os dados das notícias
  const [search, setSearch] = useState(""); // Estado para armazenar o termo de busca
  const [loading, setLoading] = useState(true); // 2. Estado para controlar o loading, inicializado como true

  useEffect(() => {
    // 3. Efeito useEffect para buscar os dados iniciais das notícias
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/`)
      .then((response) => response.json())
      .then((dados) => {
        setNews(dados.results); // Atualiza o estado news com os dados recebidos
        setLoading(false); // 4. Desativa o loading quando os dados são carregados com sucesso
      })
      .catch(() => {
        setLoading(false); // 5. Desativa o loading em caso de erro na requisição
      });
  }, []);

  useEffect(() => {
    // 6. Efeito useEffect para buscar notícias com base no termo de busca
    if (search && search.length >= 4) {
      // 7. Se o termo de busca existir e tiver pelo menos 4 caracteres
      fetch(
        `https://api.spaceflightnewsapi.net/v4/articles?news_site=${search}`
      )
        .then((response) => response.json())
        .then((dados) => {
          setNews(dados.results); // Atualiza o estado news com os dados recebidos
          setLoading(false); // 8. Desativa o loading quando os dados são carregados com sucesso
        })
        .catch(() => {
          setLoading(false); // 9. Desativa o loading em caso de erro na requisição
        });
    } else if (search === "") {
      // 10. Se o termo de busca estiver vazio, busca todas as notícias novamente
      fetch(`https://api.spaceflightnewsapi.net/v4/articles/`)
        .then((response) => response.json())
        .then((dados) => {
          setNews(dados.results); // Atualiza o estado news com os dados recebidos
          setLoading(false); // 11. Desativa o loading quando os dados são carregados com sucesso
        })
        .catch(() => {
          setLoading(false); // 12. Desativa o loading em caso de erro na requisição
        });
    }
  }, [search]); // 13. O efeito useEffect é executado sempre que o estado search muda

  if (loading) {
    // 14. Se o estado loading for true, renderiza o componente de loading
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
        {/* 15. Renderiza o componente BeatLoader com as propriedades de cor, loading e tamanho */}
      </div>
    );
  }

  return (
    // 16. Se o estado loading for false, renderiza o conteúdo principal da aplicação
    <BrowserRouter>
      <Navbar />
      <AppRoutes news={news} BannerImg={BannerImg} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;