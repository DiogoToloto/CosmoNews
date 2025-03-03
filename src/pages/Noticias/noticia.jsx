import { Article } from "../../components/Article/Article";
import "./styles.css";

const Noticias = ({dados, handleChange, pagina, setPagina, totalPaginas}) => {
  return (
    <div className="container-noticias">
      <div className="container-campo-busca d-flex justify-content-center align-items-center w-75 mx-auto py-5">
        <label htmlFor="">Buscar: </label>
        <input onChange={handleChange} className="input-busca w-75" type="text" placeholder="Busque por título" />
      </div>

      <section id="articles">
        {dados.map((article) => (
          <>
            <Article
              key={article.id}
              title={article.title}
              provider={article.news_site}
              description={article.summary}
              thumbnail={article.image_url}
              font={article.url}
            />
            <hr />
          </>
        ))}
      </section>

      {/* Botões de Paginação */}
      <div className="pagination-container">
        <button 
          onClick={() => setPagina((p) => Math.max(p - 1, 1))} 
          disabled={pagina === 1}
          className="btn btn-light"
        >
          Anterior
        </button>
        
        <span> Página {pagina} de {totalPaginas} </span>
        
        <button 
          onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas))} 
          disabled={pagina === totalPaginas}
          className="btn btn-light"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Noticias;
