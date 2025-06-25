// src/pages/PoliticaPrivacidade.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.section`
  max-width: 900px;
  margin: 100px auto 50px auto;
  padding: 2rem;
  color: #fff;
  line-height: 1.6;
`;

const Titulo = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Subtitulo = styled.h2`
  font-size: 1.4rem;
  margin-top: 2rem;
  color: #ccc;
`;

const PoliticaPrivacidade = () => {
  return (
    <Container>
      <Titulo>Política de Privacidade</Titulo>

      <p>
        Bem-vindo ao <strong>CosmoNews</strong>! Esta Política de Privacidade
        explica como coletamos, usamos, armazenamos e protegemos suas
        informações ao acessar nosso site{" "}
        <a
          href="https://space-flight-news-git-main-diogos-projects-cfb21eb2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CosmoNews
        </a>
        .
      </p>

      <Subtitulo>1. Coleta de Informações</Subtitulo>
      <p>
        Não coletamos dados pessoais diretamente. Entretanto, podemos utilizar
        serviços de terceiros (como Google Analytics) que coletam informações
        não identificáveis, como navegador, sistema operacional, tempo de visita
        e páginas acessadas, com o objetivo de melhorar sua experiência no
        site.
      </p>

      <Subtitulo>2. Cookies</Subtitulo>
      <p>
        O CosmoNews pode utilizar cookies para melhorar a navegação e entender o
        comportamento do usuário no site. Você pode desabilitá-los nas
        configurações do seu navegador a qualquer momento.
      </p>

      <Subtitulo>3. Links Externos</Subtitulo>
      <p>
        Nosso site pode conter links para sites externos, como fontes de
        notícias e APIs de terceiros. Não somos responsáveis pelas práticas de
        privacidade desses sites.
      </p>

      <Subtitulo>4. Compartilhamento de Dados</Subtitulo>
      <p>
        Não vendemos, trocamos ou transferimos suas informações para terceiros.
        Qualquer dado coletado é usado apenas para fins estatísticos e de
        melhoria da plataforma.
      </p>

      <Subtitulo>5. Alterações na Política</Subtitulo>
      <p>
        Esta política pode ser atualizada a qualquer momento. Recomendamos que
        você revise periodicamente para se manter informado.
      </p>

      <Subtitulo>6. Contato</Subtitulo>
      <p>
        Se você tiver dúvidas sobre esta Política de Privacidade, entre em
        contato conosco pelo formulário da página <strong>Contato</strong>.
      </p>

      <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
        Última atualização: {new Date().toLocaleDateString("pt-BR")}
      </p>
    </Container>
  );
}

export default PoliticaPrivacidade;