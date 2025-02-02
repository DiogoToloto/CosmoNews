import { CampoInput } from "../../components/Campo/CampoInput";
import "./styles.css";
import fundoContato from "../../assets/images/bannerContato.jpg";

export const Contato = () => {
  return (
    <section className="contato d">
      <div className="contato-banner" style={{ backgroundImage: `url(${fundoContato})` }}></div>

      <div className="contato-form-container m-auto">
        <form className="contato-form">
          <h1 className="contato-titulo">Nos Envie Uma Mensagem</h1>

          <div className="contato-input-group">
            <CampoInput 
            placeholder="Nome Completo"
            type="text"
            />
            <CampoInput 
            placeholder="Numero"
            type="number"
            />
          </div>

          <div className="contato-mensagem-group">
            <CampoInput 
            placeholder="E-mail"
            type="email"
            />
            <textarea 
              className="contato-textarea" 
              id="mensagem" 
              rows="5" 
              placeholder="Digite sua mensagem aqui..."
            ></textarea>
          </div>
          <button className="p-1 btn btn-light w-25 h-25">Enviar</button>
        </form>
      </div>
    </section>
  );
};
