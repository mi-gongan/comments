import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
      {formState && <MyCommention />}
      <PeerCommention />
      <Button onClick={goMypage}>나도 코멘션 받기</Button>
    </Wrap>
  );
}

export default peercomment;

const Wrap = styled.div``;

const Button = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  height: 35px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
  text-align: center;
  line-height: 35px;
  width: 200px;
  padding: 10px 20px;
  border-radius: 45px;
  color: white;
`;
