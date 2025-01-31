import { Article } from "../../components/Article/Article";
import { Banner } from "../../components/Banner/Banner";
import "./styles.css";

export const Inicio = ({ dados, background, titulo }) => {
  return (
    <div>
      <Banner background={background} titulo={titulo} />
      <section id="articles">
        {dados.map((article) => {
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
      </section>
    </div>
  );
};
