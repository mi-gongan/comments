import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "../../src/components/mycomment/Carousel";
import {
  commentType,
  fetchReceiveCommentsData,
} from "../../src/firebase/firebase";

function mycommention() {
  const { user } = useRouter().query;
  const [comments, setComments] = useState<commentType[]>([]);

  useEffect(() => {
    user &&
      fetchReceiveCommentsData(String(user)).then((res) => {
        const data = res.filter((comment) => comment.view === true);
        console.log(data);
        setComments(data);
      });
  }, [user]);

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
        <Carousel comments={comments} />
      </Wrap>
    </>
  );
}

export default mycommention;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { user } = context.query;
  console.log(user);
  return {
    props: { user }, // will be passed to the page component as props
  };
}

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
