import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import styled, { createGlobalStyle } from "styled-components";
import Commention from "../../src/components/form/Commention";
import { emailAtom } from "../../src/recoil/user";
import { getImg, getMessage } from "../../src/services/translate";

function Form() {
  const router = useRouter();
  const { relation }: any = router.query;
  const email = useRecoilValue(emailAtom);
  const linkFormat =
    process.env.NEXT_PUBLIC_BASEURL +
    `/form/${encodeURIComponent(email)}?relation=${relation}`;

  return (
    <Wrap>
      <Head>
        <meta property="og:title" content={`코맨션 적으러 가기`} />
        <meta property="og:description" content={getMessage(relation)} />
        <meta property="og:url" content={linkFormat} />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_BASEURL + getImg(relation)}
        />
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
