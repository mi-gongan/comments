import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { FloatingButton } from "@common";
import MyCommention from "@components/peercomment/MyCommention";
import PeerCommention from "@components/peercomment/PeerCommention";
import DefaultHead from "@components/seo/DefaultHead";

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
