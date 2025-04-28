import styled from "styled-components";
import { Article } from "../../components/Article/Article";
import { Tags } from "../../components/Tags/Tags";
import { InputBusca } from "../../components/CampoBusca/CampoBusca";

const NoticiasContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  margin-top: 90px;
  padding: 0px 2rem;

  @media (min-width: 700px) {
    hr {
      display: none;
    }
  }
`;

const CampoBuscaContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0px;
  gap: 5px;

  label{
    font-size: 1.5rem;
  }
`;

const ArtigosContainer = styled.section`
  
  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
  width: 100%;
  margin-bottom: 25px;
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const TituloTag = styled.h3`
  font-size: 1rem;
`;

const Noticias = ({ dados, handleChange, pagina, setPagina, totalPaginas, aoClicarNaTag }) => {

  return (
    <NoticiasContainer>
      <CampoBuscaContainer>
        <label htmlFor="">Buscar: </label>
        <InputBusca
          onChange={handleChange}
          type="text"
          placeholder="Busque por título"
        />
      </CampoBuscaContainer>

      <TagsContainer>
        <TituloTag>Busque por tags:</TituloTag>
        <Tags value="Nasa" onClick={aoClicarNaTag}/>
        <Tags value="SpaceX" onClick={aoClicarNaTag}/>
        <Tags value="Esa" onClick={aoClicarNaTag}/>
        <Tags value="SpaceNews" onClick={aoClicarNaTag}/>
        <Tags value="Launches" onClick={aoClicarNaTag}/>
      </TagsContainer>

      <section id="articles">
        {dados.map((article) => (
          <ArtigosContainer>
            <Article
              key={article.id}
              title={article.title}
              provider={article.news_site}
              description={article.summary}
              thumbnail={article.image_url}
              font={article.url}
            />
            <hr />
          </ArtigosContainer>
        ))}
      </section>

      {/* Botões de Paginação */}
      <PaginationContainer>
        <button
          onClick={() => setPagina((p) => Math.max(p - 1, 1))}
          disabled={pagina === 1}
          className="btn btn-light"
        >
          Anterior
        </button>

        <span>
          {" "}
          Página {pagina} de {totalPaginas}{" "}
        </span>

        <button
          onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas))}
          disabled={pagina === totalPaginas}
          className="btn btn-light"
        >
          Próximo
        </button>
      </PaginationContainer>
    </NoticiasContainer>
  );
};

export default Noticias;
