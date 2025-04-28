import React from "react";
import styled from "styled-components";

export const CampoInput = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  label,
  tamanhoMxm,
  mask,
  ...rest
}) => {
  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    if (mask === "celular") {
      inputValue = inputValue.replace(/\D/g, ""); // Remove tudo que não for número

      if (inputValue.length > 11) inputValue = inputValue.slice(0, 11);

      if (inputValue.length > 0) {
        inputValue = "(" + inputValue;
      }
      if (inputValue.length > 3) {
        inputValue = inputValue.slice(0, 3) + ") " + inputValue.slice(3);
      }
      if (inputValue.length > 10) {
        inputValue = inputValue.slice(0, 10) + "-" + inputValue.slice(10);
      }
    } else {
      inputValue = e.target.value;
    }

    onChange(inputValue);
  };

  const Input = styled.input`
  
    padding: 5px;
    width: 100%;
    
  `;

  return (
    <div className="campo-input">
      {label && <label htmlFor={id}>{label}</label>}
      <Input
        id={id}
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        maxLength={tamanhoMxm}
        {...rest}
      />
    </div>
  );
};
