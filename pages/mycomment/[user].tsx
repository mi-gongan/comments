import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "../../src/components/mycomment/Carousel";

function mycommention() {
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
  html{
    margin: auto;
    max-width: 800px;
    min-width:280px;
    height: 370px;
    background-color: white;
    
  }
  body{
    overflow:hidden;
    max-width: 800px;
    min-width:280px;
    height: 370px;
  }
`;
