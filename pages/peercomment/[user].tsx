import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FloatingButton from "../../src/components/common/FloatingButton";
import MyCommention from "../../src/components/peercomment/MyCommention";
import PeerCommention from "../../src/components/peercomment/PeerCommention";

function peercomment() {
  const router = useRouter();
  const { formState } = router.query;

  const goMypage = () => {
    router.push("/mypage");
  };
  return (
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
      {formState && <MyCommention />}
      <PeerCommention />
      <FloatingButton handleClick={goMypage}>나도 코멘션 받기</FloatingButton>
    </Wrap>
  );
}

export default peercomment;

const Wrap = styled.div``;
