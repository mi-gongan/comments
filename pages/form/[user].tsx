import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import styled, { createGlobalStyle } from "styled-components";
import Commention from "../../src/components/form/Commention";
import { emailAtom } from "../../src/recoil/user";
import { getImg, getMessage } from "../../src/services/translate";

interface FormPropsType {
  user: string | string[] | undefined;
  relation: string | string[] | undefined;
}

const Form: NextPage<FormPropsType> = ({ user, relation }: FormPropsType) => {
  const linkFormat =
    process.env.NEXT_PUBLIC_BASEURL +
    `/form/${encodeURIComponent(String(user))}?relation=${relation}`;

  return (
    <Wrap>
      <Head>
        <title>commention</title>
        <link rel="icon" href="/assets/logo.png" />
        <meta property="og:title" content="commention" />
        <meta property="og:title" content="코맨션 적으러 가기" />
        <meta
          property="og:description"
          content={getMessage(String(relation))}
        />
        <meta property="og:url" content={linkFormat} />
        <meta
          property="og:image"
          content={
            process.env.NEXT_PUBLIC_BASEURL + getImg(String(relation), "png")
          }
        />
      </Head>
      <GrobalStyled />
      <Commention></Commention>
    </Wrap>
  );
};

Form.getInitialProps = async (
  context: NextPageContext
): Promise<FormPropsType> => {
  const query = context.query;
  const relation = query.relation;
  const user = query.user;
  return { relation, user };
};

export default Form;

const Wrap = styled.div`
  padding-top: 50px;
`;

const GrobalStyled = createGlobalStyle`
  body{
    background-color: white;
  }
`;
