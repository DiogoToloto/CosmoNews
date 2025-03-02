import { Article } from "../../components/Article/Article";
import "./styles.css"

const Noticias = ({dados}) => {
  return (
    <div className="container-noticias">
      <div className="container-campo-busca d-flex justify-content-center align-items-center w-75 mx-auto py-5">
        <label htmlFor="">Buscar: </label>
        <input className="input-busca w-75" type="text" placeholder="busque por agencia"/>
      </div>
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

export default Noticias;
