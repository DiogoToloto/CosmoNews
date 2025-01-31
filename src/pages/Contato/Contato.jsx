import { Banner } from "../../components/Banner/Banner";
import { CampoInput } from "../../components/Campo/CampoInput";
import "./styles.css";

export const Contato = ({ background, titulo }) => {
  return (
    <div className="container-contato">
    <figure>
    <img src={background} class="img-fluid" alt="..."/>
    </figure>
      <section className="container-form">
        <form action="">
          <h1>Nos envie uma mensagem</h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Nome:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Digite seu nome"
            />
            <label for="exampleFormControlInput1" class="form-label">
              E-mail:
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="nome@exemplo.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-secondary">Enviar</button>
        </form>
      </section>
    </div>
  );
};
