import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FloatingButton from "../../src/components/common/FloatingButton";
import MyCommention from "../../src/components/peercomment/MyCommention";
import PeerCommention from "../../src/components/peercomment/PeerCommention";
import DefaultHead from "../../src/components/seo/DefaultHead";

function peercomment() {
  const router = useRouter();
  const { formState } = router.query;

  const goMypage = () => {
    router.push("/mypage");
  };
  return (
    <Wrap>
      <DefaultHead />
      {formState && <MyCommention />}
      <PeerCommention />
      <FloatingButton handleClick={goMypage}>나도 코멘션 받기</FloatingButton>
    </Wrap>
  );
}

export default peercomment;

const Wrap = styled.div``;
