import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 80px auto 40px;
  padding: 0 2rem;
  line-height: 1.6;
  color: #fff;

  h1, h2 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export default function PoliticaCookies() {
  return (
    <Container>
      <h1>Política de Cookies</h1>

      <p>Esta Política de Cookies explica como o CosmoNews utiliza cookies e tecnologias semelhantes ao acessar ou usar nosso site.</p>

      <h2>1. O que são cookies?</h2>
      <p>
        Cookies são pequenos arquivos de texto que são armazenados no seu navegador quando você visita um site. Eles ajudam a melhorar a experiência do usuário, lembrando suas preferências e analisando o comportamento de navegação.
      </p>

      <h2>2. Por que usamos cookies?</h2>
      <p>Utilizamos cookies para os seguintes propósitos:</p>
      <ul>
        <li><strong>Essenciais:</strong> Necessários para o funcionamento básico do site.</li>
        <li><strong>Desempenho:</strong> Para entender como os visitantes utilizam o site e melhorar sua experiência.</li>
        <li><strong>Funcionalidade:</strong> Para lembrar preferências e configurações do usuário.</li>
        <li><strong>Cookies de terceiros:</strong> Como Google Analytics, para análise de tráfego.</li>
      </ul>

      <h2>3. Cookies de terceiros</h2>
      <p>
        Podemos utilizar serviços de terceiros como o Google Analytics, que também utilizam cookies para coletar dados de forma anônima sobre como você usa o site. Esses cookies são controlados por suas próprias políticas de privacidade.
      </p>

      <h2>4. Como gerenciar cookies?</h2>
      <p>
        Você pode configurar seu navegador para bloquear ou alertar sobre cookies. No entanto, isso pode afetar algumas funcionalidades do site. Abaixo estão links para ajuda de configurações de cookies nos principais navegadores:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-cookies" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/pt-br/topic/gerenciar-cookies-no-microsoft-edge" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>5. Alterações nesta política</h2>
      <p>
        Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de qualquer alteração.
      </p>

      <p>Última atualização: Junho de 2025</p>
    </Container>
  );
}
