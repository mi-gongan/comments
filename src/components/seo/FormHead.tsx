import Head from "next/head";
import React from "react";
import { getImg, getMessage } from "../../utils/translate";

interface FormHeadPropsType {
  relation: string;
  user: string;
}

function FormHead({ relation, user }: FormHeadPropsType) {
  const linkFormat =
    "https://commention.co.kr" +
    `/form/${encodeURIComponent(String(user))}?relation=${relation}`;
  return (
    <Head>
      <title>commention</title>
      <link rel="icon" href="/assets/logo.png" />
      <meta property="og:title" content="코맨션 적으러 가기" />
      <meta property="og:description" content={getMessage(String(relation))} />
      <meta property="og:url" content={linkFormat} />
      <meta
        property="og:image"
        content={"https://commention.co.kr" + getImg(String(relation), "png")}
      />
    </Head>
  );
}

export default FormHead;
