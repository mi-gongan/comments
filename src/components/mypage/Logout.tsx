import { useRouter } from "next/router";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { emailAtom } from "@store/user";

function Logout() {
  const router = useRouter();
  const setEmail = useSetRecoilState(emailAtom);

  const kakaoLogout = () => {
    window.Kakao.Auth.logout();
    setEmail("");
    router.push("/");
  };
  return (
    <Wrap>
      <div onClick={kakaoLogout}>로그아웃</div>
    </Wrap>
  );
}

export default Logout;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  div {
    padding: 10px;
    margin: 10px;
  }
`;
