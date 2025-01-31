import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Pagina404 = () => {
  const navegacao = useNavigate();

  return (
    <div className="container404">
      <h2>404</h2>
      <h1>Ops! Página não encontrada</h1>
      <p>
        Tem certeza que era isso que você estava procurando? Aguarde uns
        instantes e recarregue a página ou volte para a página inicial.
      </p>
      <button onClick={() => {
        navegacao('/')
      }}>Voltar</button>
    </div>
  );
};
