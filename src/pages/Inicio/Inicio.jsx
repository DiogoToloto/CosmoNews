import { Article } from "../../components/Article/Article";
import "./styles.css";

export const Inicio = ({ dados }) => {
  return (
    <div>
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
          )
        })}
      </section>
    </div>
  );
};
