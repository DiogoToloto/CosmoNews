import styled from "styled-components";

export const InputBusca = styled.input`
background-color: transparent;
border: 2px solid #333;
border-radius: 10px;
padding: 5px;
color: rgb(214, 214, 214);
width: 80%;

::placeholder {
  color: rgb(214, 214, 214);
}

:focus {
  outline: none;
}
`;