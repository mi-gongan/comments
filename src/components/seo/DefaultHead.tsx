import Head from "next/head";
import React from "react";

function DefaultHead() {
  return (
    <Head>
      <title>commention</title>
      <link rel="icon" href="/assets/logo.png" />
      <meta property="og:title" content="commention" />
      <meta property="og:description" content="서로 코멘션을 남겨봐요" />
      <meta property="og:url" content={"https://commention.co.kr"} />
      <meta
        property="og:image"
        content={"https://commention.co.kr" + "/assets/logo.png"}
      />
    </Head>
  );
}

export default DefaultHead;
