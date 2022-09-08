import React from "react";
import styled from "styled-components";
import Commention from "../../src/components/common/Commention";
function Form() {
  return (
    <Wrap>
      <Commention></Commention>
    </Wrap>
  );
}

export default Form;

const Wrap = styled.div`
  padding-top: 50px;
`;
