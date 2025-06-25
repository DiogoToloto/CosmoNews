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

export default function Termos() {
  return (
    <Container>
      <h1>Termos e Condições</h1>

      <p>Bem-vindo ao CosmoNews!</p>

      <p>
        Ao acessar este site, você concorda em cumprir estes Termos e Condições de uso, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
      </p>

      <h2>1. Uso do Site</h2>
      <p>
        O CosmoNews tem o objetivo de fornecer informações sobre o espaço, lançamentos, exploração espacial e notícias do setor aeroespacial. O conteúdo é fornecido apenas para fins informativos.
      </p>

      <h2>2. Propriedade Intelectual</h2>
      <p>
        Todos os conteúdos do site, incluindo textos, imagens, logotipo, design e gráficos são de propriedade do CosmoNews ou seus respectivos autores e são protegidos pelas leis de direitos autorais. É proibida a reprodução total ou parcial sem autorização prévia.
      </p>

      <h2>3. Links Externos</h2>
      <p>
        O site pode conter links para sites externos que não são operados por nós. Não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade ou termos.
      </p>

      <h2>4. Limitação de Responsabilidade</h2>
      <p>
        As informações fornecidas são baseadas em fontes públicas e APIs como a Spaceflight News API. Não garantimos exatidão absoluta, atualizações em tempo real ou integridade das informações.
      </p>

      <h2>5. Modificações</h2>
      <p>
        Podemos revisar estes Termos a qualquer momento sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes Termos.
      </p>

      <h2>6. Contato</h2>
      <p>
        Caso tenha dúvidas sobre nossos termos, entre em contato através da seção de <a href="/contato">Contato</a>.
      </p>

      <p>Última atualização: Junho de 2025</p>
    </Container>
  );
}
