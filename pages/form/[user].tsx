import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Commention from "../../src/components/form/Commention";

function Form() {
  return (
    <>
      <GrobalStyled />
      <Wrap>
        <Commention></Commention>
      </Wrap>
    </>
  );
}

export default Form;

const Wrap = styled.div`
  padding-top: 50px;
`;

const GrobalStyled = createGlobalStyle`
  body{
    background-color: white;
  }
`;
