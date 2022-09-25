import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

function LoginBox() {
  const router = useRouter();

  const handleLogin = () => {
    try {
      kakaoLogin();
    } catch (err) {
      console.log(err);
    }
  };

  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      success: function (response: any) {
        window.Kakao.Auth.setAccessToken(response.access_token);
        router.push("/login");
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };
  return (
    <Wrap>
      <div className="title">
        나를 소개하는 새로운 방법,
        <br />
        코멘션
      </div>
      <div className="text">지금 바로 받아보세요!</div>
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
