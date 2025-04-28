import { Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Pagina404 } from "./pages/Pagina404/Pagina404";
import { Contato } from "./pages/Contato/Contato";
import Noticias from "./pages/Noticias/noticia";
import { Galeria } from "./pages/Galeria/Galeria";

const AppRoutes = ({
  news,
  BannerImg,
  handleChange,
  pagina = { pagina },
  setPagina = { setPagina },
  totalPaginas = { totalPaginas },
  lastNews={lastNews},
  aoClicarNaTag={aoClicarNaTag},
  imagens
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Inicio
            dados={news}
            background={BannerImg}
            titulo="Aqui você encontra as melhores notícias sobre lançamentos espaciais"
            lastNews={lastNews}
          />
        }
      ></Route>
      <Route
        path="/noticias"
        element={
          <Noticias
            dados={news}
            handleChange={handleChange}
            pagina={pagina}
            setPagina={setPagina}
            totalPaginas={totalPaginas}
            aoClicarNaTag={aoClicarNaTag}
          />
        }
      />
      <Route path="/contato" element={<Contato/>}></Route>
      <Route path="/galeria" element={<Galeria imagens={imagens}/>}></Route>
      <Route path="*" element={<Pagina404 />}></Route>
    </Routes>
  );
};

export default AppRoutes;
