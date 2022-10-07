import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import styled, { createGlobalStyle } from "styled-components";
import Commention from "../../src/components/form/Commention";
import { emailAtom } from "../../src/recoil/user";
import { getImg, getMessage } from "../../src/services/translate";

interface FromPropsType {
  relation: string | string[] | undefined;
}

function Form({ relation }: FromPropsType) {
  const email = useRecoilValue(emailAtom);
  const linkFormat =
    process.env.NEXT_PUBLIC_BASEURL +
    `/form/${encodeURIComponent(email)}?relation=${relation}`;

  return (
    <Wrap>
      <Head>
        <meta property="og:title" content="코맨션 적으러 가기" />
        <meta
          property="og:description"
          content={getMessage(String(relation))}
        />
        <meta property="og:url" content={linkFormat} />
        <meta property="og:image" content={getImg(String(relation))} />
      </Head>
      <GrobalStyled />
      <Commention></Commention>
    </Wrap>
  );
}

export default Form;

const Wrap = styled.div`
  padding-top: 50px;
`;

const GrobalStyled = createGlobalStyle`
  body{
    background-color: white;
  }
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const relation = context.query.relation;
  return {
    props: { relation },
  };
}
