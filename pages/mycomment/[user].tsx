import Head from "next/head";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "../../src/components/mycomment/Carousel";

function mycommention() {
  return (
    <>
      <GrobalStyle />
      <Wrap>
        <Head>
          <title>commention</title>
          <link rel="icon" href="/assets/logo.png" />
          <meta property="og:title" content="commention" />
          <meta property="og:description" content="서로 코멘션을 남겨봐요" />
          <meta property="og:url" content={process.env.NEXT_PUBLIC_BASEURL} />
          <meta
            property="og:image"
            content={process.env.NEXT_PUBLIC_BASEURL + "/assets/logo.png"}
          />
        </Head>
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
    background-color: white;
  }
`;
