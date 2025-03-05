import styled from "styled-components";
import { Article } from "../../components/Article/Article";

const NoticiasContainer = styled.div`
  margin-top: 90px;

  @media (min-width: 700px) {
    hr {
      display: none;
    }
  }
`;

const CampoBuscaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0px auto;
  padding: 40px 0px;
`;

const ArtigosContainer = styled.section`
  max-width: 1240px;
  padding: 0 2rem;
  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const InputBusca = styled.input`
  background-color: transparent;
  border: 2px solid #333;
  border-radius: 10px;
  margin: 0px 20px;
  padding: 5px;
  color: rgb(214, 214, 214);
  width: 75%;

  ::placeholder {
    color: rgb(214, 214, 214);
  }

  :focus {
    outline: none;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
  width: 100%;
  margin-bottom: 25px;
`;

const Noticias = ({ dados, handleChange, pagina, setPagina, totalPaginas }) => {
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
