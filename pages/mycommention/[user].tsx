import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Carousel from "../../src/components/common/Carousel";

function mycommention() {
  const router = useRouter();
  const { user } = router.query;
  return (
    <Wrap>
      <div>{user}</div>
      <Carousel />
    </Wrap>
  );
}

export default mycommention;

const Wrap = styled.div``;
