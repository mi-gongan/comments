import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { emailAtom } from "../src/recoil/user";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const email = useRecoilValue(emailAtom);
  const router = useRouter();
  const [render, setRender] = useState("");

  useEffect(() => {
    setRender("ok");
  }, []);

  useEffect(() => {
    email && router.push("/mypage");
  }, [email]);

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
        console.log(response);
        router.push("/login");
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };

  return (
    <>
      {render && (
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
      )}
    </>
  );
};

export default Home;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  .title {
    font-size: 24px;
    line-height: 34.87px;
    font-weight: 700;
    margin-top: 28%;
  }
  .text {
    margin-top: 60%;
    font-size: 18px;
    font-weight: 600;
  }
  .login {
    margin-top: 15px;
  }
`;
