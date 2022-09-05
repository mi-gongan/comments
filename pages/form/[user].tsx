import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Commention from "../../src/components/common/Commention";

function Form() {
  const router = useRouter();
  const { user } = router.query;
  return <Commention></Commention>;
}

export default Form;

const Wrap = styled.div``;
