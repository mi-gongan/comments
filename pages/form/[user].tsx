import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Commention from "../../src/components/common/Commention";

function Form() {
  const router = useRouter();
  const { user } = router.query;
  return (
    <Wrap>
      <Commention></Commention>
    </Wrap>
  );
}

export default Form;

const Wrap = styled.div`
  margin-top: 20px;
`;
