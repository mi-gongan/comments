import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface LoginBoxPropsType {
  handleLogin: () => void;
  peerName: string;
}

function LoginBox({ peerName, handleLogin }: LoginBoxPropsType) {
  return (
    <Wrap>
      <div className="comment-text">
        <span>{peerName}</span>에게
        <br />
        코멘션을 보내기 위해
        <br />
        카카오톡 로그인을 해주세요!
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
