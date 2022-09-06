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
  background-color: var(--primay-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .login {
    text-align: center;
  }
`;
