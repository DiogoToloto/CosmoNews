import { useState } from "react";
import { CampoInput } from "../../components/Campo/CampoInput";
import "./styles.css";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const SectionContainer = styled.section`

  display: flex;
  justify-content: space-around;
  padding: 50px;
  gap: 24px;
  max-width: 1240px;
  padding: 3.5rem 0;
  margin: 90px auto;

  @media (max-width: 700px ) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContatosContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px ) {
    width: 90%;
  }
`;

const TitleConatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const TitleContact = styled.h5`
  margin: 0;
  font-size: 1.5rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;

  @media (max-width: 700px ) {
    width: 90%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

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
    <SectionContainer>
      <ContatosContainer>
        <TitleConatiner>
          <FaPhoneAlt size={"24px"} />
          <TitleContact>Ligue para nós</TitleContact>
        </TitleConatiner>
        <p>Nós estámos disponiveis se Seg - Sex das 9h - 19h</p>
        <p>Numero: (11) 969223602 </p>
        <hr />
        <TitleConatiner>
          <MdEmail size={"24px"} />
          <TitleContact>Escreva para nós</TitleContact>
        </TitleConatiner>
        <p>
          Envie seu email em nosso formulario que entraremos em contato em até
          24h
        </p>
        <p>E-mail: diogogabriel0175@gmail.com</p>
      </ContatosContainer>
      <FormContainer
        action=""
        className="container-form d-flex flex-column"
        onSubmit={HandleSubmit}
      >
        <InputContainer>
          <CampoInput
            placeholder="Nome Completo"
            id="idNome"
            type="text"
            label=""
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <CampoInput
            placeholder="Número de contato"
            id="idNumero"
            type="text"
            label=""
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <CampoInput
            placeholder="E-mail"
            id="idEmail"
            type="email"
            label=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
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
      </FormContainer>
    </SectionContainer>
  );
};
