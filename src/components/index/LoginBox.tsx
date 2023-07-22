import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

interface LoginBoxPropsType {
  handleLogin: () => void;
}

function LoginBox({ handleLogin }: LoginBoxPropsType) {
  const router = useRouter();

  return (
    <Wrap>
      <div className="title" role="title">
        나를 소개하는 새로운 방법,
        <br />
        코멘션
      </div>
      <div className="subtitle" role="subtitle">
        지금 바로 받아보세요!
      </div>
      <div className="login" onClick={handleLogin}>
        <Image
          alt="kakao-login"
          src="/assets/kakao-login.png"
          width="300px"
          height="45px"
        ></Image>
      </div>
    </Wrap>
  );
}

export default LoginBox;

const Wrap = styled.div``;
