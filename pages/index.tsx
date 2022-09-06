import type { NextPage } from "next";
import styled from "styled-components";
import Carousel from "../src/components/common/Carousel";
import Image from "next/image";
import Commention from "../src/components/common/Commention";

const Home: NextPage = () => {
  async function kakaoLogin() {
    window.Kakao.Auth.login({
      success: function (response: any) {
        console.log(response);
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  }
  const kakaoLogout = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    window.Kakao.Auth.logout(function () {
      console.log(window.Kakao.Auth.getAccessToken());
    });
  };
  const kakaoExit = () => {
    window.Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response: any) {
        console.log(response);
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };
  const fetchData = () => {
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function (response: any) {
        console.log(response);
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };
  const checkAllow = () => {
    window.Kakao.API.request({
      url: "/v2/user/scopes",
      data: {
        scopes: ["account_email"],
      },
      success: function (response: any) {
        console.log(response);
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };
  return (
    <Wrap>
      <Image
        alt="kakao-login"
        src="/assets/kakao-login.png"
        width="300px"
        height="45px"
      ></Image>
      <button onClick={kakaoLogin}>Login</button>
      <button onClick={kakaoLogout}>Logout</button>
      <button onClick={kakaoExit}>탈퇴</button>
      <button onClick={fetchData}>데이터 가져오기</button>
      <button onClick={checkAllow}>동의 확인</button>
      <Commention />
      <Carousel></Carousel>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  width: 100%;
`;
