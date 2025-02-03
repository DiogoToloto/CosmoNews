import { useState } from "react";
import { CampoInput } from "../../components/Campo/CampoInput";
import "./styles.css";

export const Contato = () => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");

  function HandleSubmit(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");

    setNome("");
    setNumero("");
    setEmail("");
  }

  return (
    <section className="container-contato d-flex flex-column align-items-center justify-content-center">
      <h1 className=" m-4">Contato</h1>
      <form
        action=""
        className="container-form d-flex flex-column"
        onSubmit={HandleSubmit}
      >
        <CampoInput
          placeholder="Nome Completo"
          id="idNome"
          type="text"
          label="Nome:"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <CampoInput
          placeholder="Número de contato"
          id="idNumero"
          type="number"
          label="Número:"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <CampoInput
          placeholder="E-mail"
          id="idEmail"
          type="email"
          label="E-mail:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          placeholder="Digite a sua mensagem."
          required
        ></textarea>
        <button type="submit" class="btn btn-success  w-25">
          Enviar
        </button>
      </form>
    </section>
  );
};
