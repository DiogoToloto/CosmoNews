import { Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Pagina404 } from "./pages/Pagina404/Pagina404";
import { Contato } from "./pages/Contato/Contato";
import Noticias from "./pages/Noticias/noticia";

const AppRoutes = ({
  news,
  BannerImg,
  handleChange,
  pagina = { pagina },
  setPagina = { setPagina },
  totalPaginas = { totalPaginas },
  lastNews={lastNews}
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
          />
        }
      />
      <Route path="/contato" element={<Contato titulo="Contato" />}></Route>
      <Route path="*" element={<Pagina404 />}></Route>
    </Routes>
  );
};

export default AppRoutes;
