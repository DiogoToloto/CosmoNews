import styled from "styled-components";

const FundoContainer = styled.div`
  min-height: 100vh;
  transition: filter 0.3s ease;
  filter: ${({ blur }) => (blur ? "blur(5px) brightness(0.8)" : "none")};
`;

export const Fundo = ({ blur, children }) => {
  return <FundoContainer blur={blur}>{children}</FundoContainer>;
};
