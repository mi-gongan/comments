import Image from "next/image";
import React from "react";
import styled from "styled-components";
import letter from "../../../public/assets/letter.svg";

interface LoginBoxPropsType {
  handleLogin: () => void;
  peerName: string;
}

function LoginBox({ peerName, handleLogin }: LoginBoxPropsType) {
  return (
    <Wrap>
      <Image src={letter} />
      <div className="comment-title">
        성공적으로
        <br />
        저장이 완료되었습니다!
      </div>
      <div className="comment-text">
        로그인으로 <span>조수민</span>님께
        <br />
        소개글을 보내주세요!
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

const Wrap = styled.div`
  text-align: center;
  .comment-title {
    font-style: normal;
    font-weight: 600;
    font-size: 23.8857px;
    line-height: 158.5%;
    margin: 19px 0px;
  }
  .comment-text {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 158.5%;
  }
  span {
    font-weight: 600;
    text-emphasis-style: dot;
    text-emphasis-position: over left;
    -webkit-text-emphasis-style: dot;
    -webkit-text-emphasis-position: over;
  }
  .login {
    margin-top: 20%;
    text-align: center;
  }
`;
