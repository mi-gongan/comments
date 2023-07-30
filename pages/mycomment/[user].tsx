import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "../../src/components/mycomment/Carousel";
import DefaultHead from "../../src/components/seo/DefaultHead";
import {
  commentType,
  fetchReceiveCommentsData,
} from "../../src/services/firebase";

function mycommention() {
  const { user } = useRouter().query;
  const [comments, setComments] = useState<commentType[]>([]);
  const [starComments, setStarComments] = useState<commentType[]>([]);

  useEffect(() => {
    user &&
      fetchReceiveCommentsData(String(user)).then((res) => {
        const data = res.filter((comment) => comment.view === true);
        const starData = data.filter((comment) => comment.star == true);
        const notStarData = data.filter((comment) => comment.star == false);
        setComments(notStarData);
        setStarComments(starData);
      });
  }, [user]);

  return (
    <>
      <GrobalStyle />
      <Wrap>
        <DefaultHead />
        <Carousel startComments={starComments} comments={comments} />
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
