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

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContatosContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
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

  @media (max-width: 700px) {
    width: 90%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Contato = () => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function HandleSubmit(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");

    setNome("");
    setNumero("");
    setEmail("");
    setMensagem("");
  }

  return (
    <SectionContainer>
      <ContatosContainer>
        <TitleConatiner>
          <FaPhoneAlt size={"24px"} />
          <TitleContact>Ligue para nós</TitleContact>
        </TitleConatiner>
        <p>Nós estámos disponiveis de Seg - Sex das 9h - 19h</p>
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
            placeholder="Nome"
            id="idNome"
            type="text"
            label=""
            value={nome}
            onChange={(value) => setNome(value)}

          />
          <CampoInput
            placeholder="(00)00000-0000"
            id="idNumero"
            type="text"
            label=""
            value={numero}
            onChange={(value) => setNumero(value)}
            tamanhoMxm="15"
            mask='celular'
          />
          <CampoInput
            placeholder="E-mail"
            id="idEmail"
            type="email"
            label=""
            value={email}
            onChange={(value) => setEmail(value)}
          />
        </InputContainer>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          placeholder="Digite a sua mensagem."
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>
        <button type="submit" class="btn btn-success  w-25">
          Enviar
        </button>
      </FormContainer>
    </SectionContainer>
  );
};
