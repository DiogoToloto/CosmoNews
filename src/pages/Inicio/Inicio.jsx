import styled from "styled-components";
import { Article } from "../../components/Article/Article";
import { Banner } from "../../components/Banner/Banner";

const InicioContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    hr {
      display: none;
    }
  }
`;

const ArtigosContainer = styled.section`
  max-width: 1240px;
  padding: 0 2rem;
  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  gap: 46px;
`;

export const Inicio = ({ lastNews, background, titulo }) => {
  return (
    <InicioContainer>
      <Banner background={background} titulo={titulo} />
      <ArtigosContainer>
        {lastNews.map((article) => {
          return (
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
          );
        })}
      </ArtigosContainer>
    </InicioContainer>
  );
};
