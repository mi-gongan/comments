import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "@components/mycomment/Carousel";
import DefaultHead from "@components/seo/DefaultHead";
import { CommentType, Firebase } from "@libs/firebase";

function mycommention() {
  const { user } = useRouter().query;
  const [comments, setComments] = useState<CommentType[]>([]);
  const [starComments, setStarComments] = useState<CommentType[]>([]);

  useEffect(() => {
    user &&
      Firebase.fetchReceiveCommentsData(String(user)).then((res) => {
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
