import { useRouter } from "next/router";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "../../src/components/common/Carousel";

function mycommention() {
  const router = useRouter();
  const { user } = router.query;
  return (
    <>
      <GrobalStyle />
      <Wrap>
        <Carousel />
      </Wrap>
    </>
  );
}

export default mycommention;

const Wrap = styled.div``;

const GrobalStyle = createGlobalStyle`
  body{
    max-width: 700px;
    height: 350px;
  }
`;
