import Image from "next/image";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function ScrollFloatingButton() {
  const goScrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <Wrap onClick={goScrollDown}>
      <Image src="/assets/floating_down.png" width={52} height={52} />
    </Wrap>
  );
}

export default ScrollFloatingButton;

const Wrap = styled.div`
  position: fixed;
  bottom: 20px;
  z-index: 99;
  @media screen and (max-width: 450px) {
    right: 20px;
    margin-left: 0px;
  }
  @media screen and (min-width: 450px) {
    left: 50%;
    margin-left: 155px;
  }
`;
