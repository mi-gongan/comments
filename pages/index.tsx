import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import { kakaoLogin } from "../src/services/kakao";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { emailAtom } from "../src/recoil/user";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [email, setEmail] = useRecoilState(emailAtom);
  const router = useRouter();
  const [render, setRender] = useState("");

  useEffect(() => {
    setRender("ok");
    email && router.push(`/mypage/${email}`);
  }, []);

  const handleLogin = () => {
    try {
      kakaoLogin();
      setUserData();
    } catch (err) {
      console.log(err);
    }
  };

  const setUserData = () => {
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function (response: any) {
        console.log(response);
        setEmail(response.kakao_account.email);
        router.push(`/mypage/${response.kakao_account.email}`);
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
  background-color: #2d42ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .login {
    text-align: center;
  }
`;
